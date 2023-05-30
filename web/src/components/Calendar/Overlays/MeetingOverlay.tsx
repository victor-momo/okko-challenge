import { useState } from "react";
import { Meeting } from "../../../types/Meeting";
import { ShowMeetingModal } from "../../Modals/ShowMeetingModal";

export const MeetingOverlay = ({
  meeting,
  tileHeight
}: {
  meeting: Meeting;
  tileHeight: number;
}) => {
  const startHour = new Date(meeting.start_time).getHours();

  const [showModal, setShowModal] = useState(false);

  const offsetTop = tileHeight * startHour;
  const itemHeight = tileHeight * (meeting.duration / 60);

  return (
    <>
      <div
        style={{ marginTop: `${offsetTop}px` }}
        className={`w-full absolute`}
      >
        <div
          onClick={() => {
            setShowModal(true);
          }}
          style={{ height: `${itemHeight}px` }}
          className={`hover:cursor-pointer mx-4 bg-blue-500 rounded-lg`}
        >
          {meeting.agenda}
        </div>
      </div>
      <>
        {showModal && (
          <ShowMeetingModal
            closeModal={() => {
              setShowModal(false);
            }}
            meeting={meeting}
          />
        )}
      </>
    </>
  );
};
