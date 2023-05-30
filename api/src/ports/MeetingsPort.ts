import { Meeting } from "../types/Meeting";

export interface MeetingsPort {
  getAllMeetings(): Promise<Array<Meeting>>;
}
