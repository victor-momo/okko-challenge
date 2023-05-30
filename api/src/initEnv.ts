import "dotenv/config";

const ZOOM_API_URL = process.env["ZOOM_API_URL"] as unknown as string;
const ZOOM_OAUTH_ACCESS_URL = process.env[
  "ZOOM_OAUTH_ACCESS_URL"
] as unknown as string;
const ZOOM_OAUTH_AUTH_HEADER = process.env[
  "ZOOM_OAUTH_AUTH_HEADER"
] as unknown as string;
const ZOOM_USER_ID = process.env["ZOOM_USER_ID"] as unknown as string;
const ZOOM_ACCOUNT_ID = process.env["ZOOM_ACCOUNT_ID"] as unknown as string;

export const ENV = {
  ZOOM_API_URL,
  ZOOM_OAUTH_ACCESS_URL,
  ZOOM_OAUTH_AUTH_HEADER,
  ZOOM_USER_ID,
  ZOOM_ACCOUNT_ID
};
