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

export const parseDate = (_d: string) => {
  const date = new Date(_d);
  const year = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const dName = date.getDay()
  const day = d;
  const month = m + 1;
  const monthName = months[m];
  const shortMonthName = shortMonths[m];
  const dayName = days[dName];
  const result = {
    formatted: `${monthName} ${day}, ${year}`,
    shortFormatted: `${shortMonthName} ${day}, ${year}`,
    year: year,
    month: month,
    day: day,
    monthName: monthName,
    dayName: dayName,
  };
  return result;
};

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
