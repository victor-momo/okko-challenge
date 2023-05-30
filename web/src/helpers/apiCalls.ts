import { CreateMeetingDTO } from "../types/CreateMeetingDTO";
import { Meeting } from "../types/Meeting";

export const fetchMeetings = async (): Promise<Meeting[]> => {
  const res = await fetch("http://localhost:3001/meeting/");
  return res.json();
};

export const createMeeting = async (
  createMeetingDTO: CreateMeetingDTO
): Promise<Meeting> => {
  const res = await fetch("http://localhost:3001/meeting/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(createMeetingDTO)
  });
  return res.json();
};
