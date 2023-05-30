import { WeekDay } from "./WeekDay";
import weekDays from "../../resources/weekDays";

export const DaysRow = () => {
  return (
    <div className="flex-row ml-12 flex justify-center">
      {weekDays.map((day) => (
        <WeekDay key={day.getUTCDate()} date={day} />
      ))}
    </div>
  );
};
