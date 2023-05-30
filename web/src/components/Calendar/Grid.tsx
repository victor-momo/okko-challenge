import weekDays from "../../resources/weekDays";
import { GridColumn } from "./GridColumn";

export const Grid = () => {
  return (
    <div className="flex flex-grow">
      {weekDays.map((day) => {
        return <GridColumn key={day.getUTCDate()} />;
      })}
    </div>
  );
};
