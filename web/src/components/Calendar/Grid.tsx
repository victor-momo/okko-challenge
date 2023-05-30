import { useQuery } from "react-query";
import weekDays from "../../resources/weekDays";
import { GridColumn } from "./GridColumn";
import { fetchMeetings } from "../../helpers/apiCalls";
import { sameDay } from "../../helpers/dateHelper";

export const Grid = () => {
  const { data: meetings } = useQuery("meetings", fetchMeetings);

  return (
    <div className="flex flex-grow">
      {weekDays.map((day) => {
        return (
          <GridColumn
            key={day.getUTCDate()}
            meetings={
              meetings && meetings.length > 0
                ? meetings.filter((meeting) =>
                    sameDay(new Date(meeting.start_time), day)
                  )
                : []
            }
          />
        );
      })}
    </div>
  );
};
