// 1. Display Current Day and Time
function dateTime() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();

  const day = days[now.getDay()];
  let hours = now.getHours();
  const minitues = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  console.log("Today is" + day);
  console.log(`Curret Time: is ${hours} ${ampm}  ${minitues}:${seconds}`);
}

dateTime();
