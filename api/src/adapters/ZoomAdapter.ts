import axios from "axios";
import querystring from "querystring";
import { ENV } from "../initEnv";
import { ZoomApiGetAllMeetingsResponseType } from "../types/ZoomApiGetAllMeetingsResponseType";

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
}
