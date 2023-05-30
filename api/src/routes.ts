import { MeetingsPort } from "./ports/MeetingsPort";
import { Request, Response } from "express";
import { CreateMeetingRouteRequestBody } from "./types/CreateMeetingRouteRequestBody";

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

export const createMeetingRoute = (port: MeetingsPort) => {
  return async (req: CreateMeetingRouteRequestBody, res: Response) => {
    try {
      const createMeetingDTO = req.body;
      const meeting = await port.createMeeting(createMeetingDTO);
      res.status(200).send(meeting);
    } catch (e) {
      console.error(e);
      res.status(404).send("an error has occured");
    }
  };
};
