import { Meeting } from "../../../types/Meeting";
import { MeetingOverlay } from "./MeetingOverlay";

export const MeetingOverlays = ({
  meetings,
  columnHeight
}: {
  meetings: Meeting[];
  columnHeight: number;
}) => {
  const tileHeight = columnHeight / 24;
  return (
    <>
      {meetings.map((meeting) => (
        <MeetingOverlay
          tileHeight={tileHeight}
          key={meeting.id}
          meeting={meeting}
        />
      ))}
    </>
  );
};
