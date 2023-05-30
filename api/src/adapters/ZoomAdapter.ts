import axios from "axios";
import querystring from "querystring";
import { ENV } from "../initEnv";
import { ZoomApiGetAllMeetingsResponseType } from "../types/ZoomApiGetAllMeetingsResponseType";
import { CreateMeetingDTO } from "../types/CreateMeetingDTO";
import { ZoomApiCreateMeetingResponseType } from "../types/ZoomApiCreateMeetingResponseType";

export class ZoomAdapter {
  hasApiAccess: boolean;
  accessToken?: string;

  constructor() {
    this.hasApiAccess = false;
  }

  async getAccessToken() {
    return axios
      .post<any>(
        ENV.ZOOM_OAUTH_ACCESS_URL,
        querystring.stringify({
          grant_type: "account_credentials",
          account_id: ENV.ZOOM_ACCOUNT_ID
        }),
        {
          headers: {
            authorization: `Basic ${ENV.ZOOM_OAUTH_AUTH_HEADER}`,
            host: "zoom.us"
          }
        }
      )
      .then((res) => {
        this.accessToken = res.data.access_token;
        this.hasApiAccess = true;
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });
  }

  async getAllMeetings() {
    if (!this.hasApiAccess) {
      await this.getAccessToken();
    }
    return axios
      .get<ZoomApiGetAllMeetingsResponseType>(
        ENV.ZOOM_API_URL + `/users/${ENV.ZOOM_USER_ID}/meetings`,
        {
          headers: { authorization: `Bearer ${this.accessToken}` }
        }
      )
      .then((res) => {
        return res.data.meetings;
      })
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          this.hasApiAccess = false;
        }
        throw error;
      });
  }

  async createMeeting(createMeetingDTO: CreateMeetingDTO) {
    if (!this.hasApiAccess) {
      await this.getAccessToken();
    }
    const duration =
      (new Date(createMeetingDTO.endDate).getTime() -
        new Date(createMeetingDTO.startDate).getTime()) /
      60000;

    return axios
      .post<ZoomApiCreateMeetingResponseType>(
        ENV.ZOOM_API_URL + `/users/${ENV.ZOOM_USER_ID}/meetings`,
        {
          agenda: createMeetingDTO.object,
          type: 2,
          duration,
          password: "123456",
          schedule_for: "white_aa@proton.me",
          timezone: "Europe/Paris",
          settings: {
            encryption_type: "enhanced_encryption",
            meeting_invitees: [
              {
                email: "morel.victor.69@gmail.com"
              }
            ],
            participant_video: false,
            private_meeting: false,
            registrants_confirmation_email: true,
            registrants_email_notification: true,
            registration_type: 1
          },
          start_time: `${
            new Date(createMeetingDTO.startDate).toISOString().split(".")[0]
          }`,
          topic: createMeetingDTO.object
        },
        {
          headers: { authorization: `Bearer ${this.accessToken}` }
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          this.hasApiAccess = false;
        }
        throw error;
      });
  }
}
