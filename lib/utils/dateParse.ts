const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const shortMonths = [
  "Jan.",
  "Feb.",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const parseDate = (date: string) => {
  const myDate = new Date(date);
  const year = myDate.getFullYear();
  const m = myDate.getMonth();
  const d = myDate.getDay();
  const day = d + 1
  const month = m + 1
  const monthName = months[m]
  const shortMonthName = shortMonths[m]
  const dayName = days[d]
  const result = {
    formatted: `${monthName} ${day}, ${year}`,
    shortFormatted: `${shortMonthName} ${day}, ${year}`,
    year: year,
    month: month,
    day: day,
    monthName: monthName,
    dayName: dayName,
  };
  return result
};

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
