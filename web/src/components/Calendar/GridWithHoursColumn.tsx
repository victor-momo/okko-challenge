import { Grid } from "./Grid";
import { HoursColumn } from "./HoursColumn";

export const GridWithHoursColumn = () => {
  return (
    <div className="flex-row flex space-x-2 flex-grow">
      <HoursColumn />
      <Grid />
    </div>
  );
};
