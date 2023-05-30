import axios from "axios";
import querystring from "querystring";
import { ENV } from "../initEnv";

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
}
