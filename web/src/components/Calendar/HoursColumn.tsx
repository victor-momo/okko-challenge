import { dayHours } from "../../resources/dayHours";

export const HoursColumn = () => {
  return (
    <div className="flex-col flex space-y-1">
      {Object.values(dayHours).map((hour) => (
        <div key={hour} className="flex flex-grow">
          {hour}
        </div>
      ))}
    </div>
  );
};
