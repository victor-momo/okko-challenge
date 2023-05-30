import { useEffect, useRef, useState } from "react";
import { dayHours } from "../../resources/dayHours";
import { Meeting } from "../../types/Meeting";
import { GridTile } from "./GridTile";
import { MeetingOverlays } from "./Overlays/MeetingOverlays";

export const GridColumn = ({
  meetings
}: {
  meetings: Meeting[] | undefined;
}) => {
  const [columnHeight, setColumnHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setColumnHeight(ref.current.clientHeight);
    }
  }, [columnHeight]);

  return (
    <div className="space-x-1 relative flex flex-col flex-grow" ref={ref}>
      {Object.keys(dayHours).map((hour) => (
        <GridTile key={hour} />
      ))}
      {columnHeight > 0 && meetings && meetings.length > 0 && (
        <MeetingOverlays meetings={meetings} columnHeight={columnHeight} />
      )}
    </div>
  );
};
