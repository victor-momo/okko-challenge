import { dayHours } from "../../resources/dayHours";
import { GridTile } from "./GridTile";

export const GridColumn = () => {
  return (
    <div className="space-x-1 relative flex flex-col flex-grow">
      {Object.keys(dayHours).map((hour) => (
        <GridTile key={hour} />
      ))}
    </div>
  );
};
