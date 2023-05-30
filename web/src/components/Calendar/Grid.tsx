import { useQuery } from "react-query";
import weekDays from "../../resources/weekDays";
import { GridColumn } from "./GridColumn";
import { fetchMeetings } from "../../helpers/apiCalls";

export const Grid = () => {
  const { data: meetings } = useQuery("meetings", fetchMeetings);

  return (
    <div className="flex flex-grow">
      {weekDays.map((day) => {
        return <GridColumn key={day.getUTCDate()} />;
      })}
    </div>
  );
};
