import { DaysRow } from "./DaysRow";
import { GridWithHoursColumn } from "./GridWithHoursColumn";

export const Calendar = () => {
  return (
    <>
      <div className="flex flex-col flex-grow space-y-4 ">
        <DaysRow />
        <GridWithHoursColumn />
      </div>
    </>
  );
};
