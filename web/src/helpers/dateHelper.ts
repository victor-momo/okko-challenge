export const sameDay = (d1: Date, d2: Date) => {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
};

export const dayAndHourToTimestamp = (day: Date, hour: number): number => {
  const copyDate = new Date(
    Date.UTC(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      day.getHours(),
      day.getMinutes(),
      day.getSeconds()
    )
  );
  copyDate.setUTCHours(0, 0, 0, 0);

  return copyDate.getTime() + hour * 60 * 1000 * 60;
};
