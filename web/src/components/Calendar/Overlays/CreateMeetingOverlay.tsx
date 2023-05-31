export const CreateMeetingOverlay = ({
  columnHeight,
  startYPosition,
  setShowModal,
  setMeetingStartHour,
  itemHeight
}: {
  columnHeight: number;
  itemHeight: number;
  startYPosition: number;
  day: Date;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMeetingStartHour: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const tileHeight = columnHeight / 24;
  const offsetTop =
    startYPosition + tileHeight / 2 - (window.innerHeight - columnHeight);

  const startHour = Math.floor(offsetTop / tileHeight);
  setMeetingStartHour(startHour);

  return (
    <div
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
