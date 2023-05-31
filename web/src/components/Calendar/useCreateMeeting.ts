import { useState } from "react";

export const useCreateMeeting = (columnHeight: number) => {
  const [creatingMeeting, setCreatingMeeting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [meetingStartYPosition, setMeetingStartYPosition] = useState(0);
  const [itemHeight, setItemHeight] = useState(-1);

  const [meetingStartHour, setMeetingStartHour] = useState(-1);
  const [meetingEndHour, setMeetingEndHour] = useState(-1);

  const onMouseMove = (e: any) => {
    if (showModal) {
      return;
    }
    const yPosition = e.clientY;
    setItemHeight(columnHeight / 24 + yPosition - meetingStartYPosition);
    const offsetTop =
      meetingStartYPosition +
      columnHeight / 48 -
      (window.innerHeight - columnHeight);
    setMeetingEndHour(
      Math.ceil((offsetTop + itemHeight) / (columnHeight / 24))
    );
  };

  const onMouseDown = (e: any) => {
    if (!showModal) {
      setCreatingMeeting(true);
      const y = e.clientY;
      setMeetingStartYPosition(y);
    }
  };

  return {
    setItemHeight,
    creatingMeeting,
    meetingEndHour,
    meetingStartHour,
    setCreatingMeeting,
    setShowModal,
    setMeetingEndHour,
    setMeetingStartHour,
    onMouseMove,
    showModal,
    itemHeight,
    onMouseDown,
    meetingStartYPosition
  };
};
