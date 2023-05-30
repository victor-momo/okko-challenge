import { addDays, eachDayOfInterval } from "date-fns";

const today = new Date();
const weekDays = eachDayOfInterval({
  start: today,
  end: addDays(today, 6)
});

export default weekDays;
