import { Meeting } from "./Meeting";

export type ZoomApiGetAllMeetingsResponseType = {
  page_size: number;
  total_records: number;
  next_page_token: string;
  meetings: Meeting[];
};
