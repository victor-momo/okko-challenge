import { format } from "date-fns";

export const WeekDay = ({ date }: { date: Date }) => {
  return (
    <>
      <div className="space-x-1 flex flex-grow justify-center">
        <div>{date.toLocaleString("en-us", { weekday: "long" })}</div>
        <div>{date.getDate()}</div>
        <div>{format(date, "LLLL")}</div>
      </div>
    </>
  );
};
