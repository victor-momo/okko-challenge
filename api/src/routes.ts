import { MeetingsPort } from "./ports/MeetingsPort";
import { Request, Response } from "express";

export const getAllMeetingsRoute = (port: MeetingsPort) => {
  return async (req: Request, res: Response) => {
    try {
      const meetings = await port.getAllMeetings();
      res.status(200).send(meetings);
    } catch (e) {
      console.error(e);
      res.status(404).send("an error has occured");
    }
  };
};
