import { Meeting } from "../types/Meeting";

export const fetchMeetings = async (): Promise<Meeting[]> => {
  const res = await fetch("http://localhost:3001/meeting/");
  return res.json();
};
