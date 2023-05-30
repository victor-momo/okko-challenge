import { CreateMeetingDTO } from "../types/CreateMeetingDTO";
import { Meeting } from "../types/Meeting";

export interface MeetingsPort {
  getAllMeetings(): Promise<Array<Meeting>>;
  createMeeting(createMeeting: CreateMeetingDTO): Promise<Meeting>;
}
