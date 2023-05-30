import { useState } from "react";

export const CreateMeetingOverlay = ({
  columnHeight,
  startYPosition,
  setShowModal,
  setMeetingStartHour,
  setMeetingEndHour
}: {
  columnHeight: number;
  startYPosition: number;
  day: Date;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMeetingStartHour: React.Dispatch<React.SetStateAction<number>>;
  setMeetingEndHour: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const tileHeight = columnHeight / 24;
  const offsetTop =
    startYPosition + tileHeight / 2 - (window.innerHeight - columnHeight);

  const startHour = Math.floor(offsetTop / tileHeight);
  setMeetingStartHour(startHour);

  const [itemHeight, setItemHeight] = useState(tileHeight);

  return (
    <div
      onMouseMove={(e) => {
        const yPosition = e.clientY;
        setItemHeight(tileHeight + yPosition - startYPosition);
        setMeetingEndHour(Math.ceil((offsetTop + itemHeight) / tileHeight));
      }}
      onMouseUp={() => {
        setShowModal(true);
      }}
      style={{ marginTop: `${offsetTop}px` }}
      className={`w-full absolute`}
    >
      <div
        style={{ height: `${itemHeight}px` }}
        className={`hover:cursor-pointer mx-4 bg-blue-500 rounded-lg`}
      ></div>
    </div>
  );
};
