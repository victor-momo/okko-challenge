import { useEffect, useRef, useState } from "react";
import { dayHours } from "../../resources/dayHours";
import { Meeting } from "../../types/Meeting";
import { GridTile } from "./GridTile";
import { MeetingOverlays } from "./Overlays/MeetingOverlays";
import { sameDay } from "../../helpers/dateHelper";
import { CreateMeetingOverlay } from "./Overlays/CreateMeetingOverlay";
import { SetMeetingModal } from "../Modals/SetMeetingModal";
import { useCreateMeeting } from "./useCreateMeeting";

export const GridColumn = ({
  day,
  meetings
}: {
  day: Date;
  meetings: Meeting[] | undefined;
}) => {
  const [columnHeight, setColumnHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const {
    setItemHeight,
    onMouseMove,
    showModal,
    meetingEndHour,
    setCreatingMeeting,
    meetingStartHour,
    creatingMeeting,
    itemHeight,
    setMeetingStartHour,
    setShowModal,
    closeModalAndResetState,
    meetingStartYPosition,
    onMouseDown
  } = useCreateMeeting(columnHeight);

  useEffect(() => {
    if (ref.current) {
      setColumnHeight(ref.current.clientHeight);
      setItemHeight(columnHeight / 24);
    }
  }, [columnHeight, setItemHeight]);

  return (
    <div
      onMouseMove={onMouseMove}
      className="space-x-1 relative flex flex-col flex-grow"
      ref={ref}
    >
      {Object.keys(dayHours).map((hour) => (
        <GridTile
          key={hour}
          disabled={
            sameDay(new Date(), day) && parseInt(hour) < new Date().getHours()
          }
          onMouseDown={onMouseDown}
        />
      ))}
      {columnHeight > 0 && meetings && meetings.length > 0 && (
        <MeetingOverlays meetings={meetings} columnHeight={columnHeight} />
      )}
      {columnHeight > 0 && creatingMeeting && (
        <CreateMeetingOverlay
          day={day}
          itemHeight={itemHeight}
          setMeetingStartHour={setMeetingStartHour}
          columnHeight={columnHeight}
          startYPosition={meetingStartYPosition}
          setShowModal={setShowModal}
        />
      )}
      {showModal && (
        <SetMeetingModal
          day={day}
          closeModalAndResetState={closeModalAndResetState}
          meetingStartHour={meetingStartHour}
          meetingEndHour={meetingEndHour}
          setCreatingMeeting={setCreatingMeeting}
        />
      )}
    </div>
  );
};
