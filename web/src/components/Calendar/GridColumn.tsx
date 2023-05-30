import { useEffect, useRef, useState } from "react";
import { dayHours } from "../../resources/dayHours";
import { Meeting } from "../../types/Meeting";
import { GridTile } from "./GridTile";
import { MeetingOverlays } from "./Overlays/MeetingOverlays";
import { dayAndHourToTimestamp, sameDay } from "../../helpers/dateHelper";
import { CreateMeetingOverlay } from "./Overlays/CreateMeetingOverlay";
import { SetMeetingModal } from "../Modals/SetMeetingModal";

export const GridColumn = ({
  day,
  meetings
}: {
  day: Date;
  meetings: Meeting[] | undefined;
}) => {
  const [columnHeight, setColumnHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const [creatingMeeting, setCreatingMeeting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [meetingStartHour, setMeetingStartHour] = useState(-1);
  const [meetingEndHour, setMeetingEndHour] = useState(-1);
  const [meetingStartYPosition, setMeetingStartYPosition] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setColumnHeight(ref.current.clientHeight);
    }
  }, [columnHeight]);

  return (
    <div className="space-x-1 relative flex flex-col flex-grow" ref={ref}>
      {Object.keys(dayHours).map((hour) => (
        <GridTile
          key={hour}
          disabled={
            sameDay(new Date(), day) && parseInt(hour) < new Date().getHours()
          }
          onMouseDown={(e) => {
            if (!showModal) {
              setCreatingMeeting(true);
              const y = e.clientY;
              setMeetingStartYPosition(y);
            }
          }}
        />
      ))}
      {columnHeight > 0 && meetings && meetings.length > 0 && (
        <MeetingOverlays meetings={meetings} columnHeight={columnHeight} />
      )}
      {columnHeight > 0 && creatingMeeting && (
        <CreateMeetingOverlay
          setMeetingStartHour={setMeetingStartHour}
          setMeetingEndHour={setMeetingEndHour}
          columnHeight={columnHeight}
          day={day}
          startYPosition={meetingStartYPosition}
          setShowModal={setShowModal}
        />
      )}
      {showModal && (
        <SetMeetingModal
          closeModalAndResetHours={() => {
            setShowModal(false);
            setMeetingStartHour(-1);
            setMeetingEndHour(-1);
          }}
          startTile={dayAndHourToTimestamp(day, meetingStartHour)}
          endTile={
            meetingEndHour != -1
              ? dayAndHourToTimestamp(day, meetingEndHour)
              : dayAndHourToTimestamp(day, meetingStartHour + 1)
          }
          setCreatingMeeting={setCreatingMeeting}
        />
      )}
    </div>
  );
};
