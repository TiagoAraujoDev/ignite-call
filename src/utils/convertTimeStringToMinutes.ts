export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(":");

  const hoursInMinutes = parseInt(hours) * 60;

  const minutesTotal = hoursInMinutes + parseInt(minutes);

  return minutesTotal;
}
