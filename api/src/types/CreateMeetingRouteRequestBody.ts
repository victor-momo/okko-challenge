export interface CreateMeetingRouteRequestBody extends Express.Request {
  body: {
    startDate: string;
    endDate: string;
    object: string;
  };
}
