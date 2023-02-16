export const today = new Date();

export const todayAt = (
  hours,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
) =>
  new Date(today).setHours(
    hours,
    minutes,
    seconds,
    milliseconds
  );
  