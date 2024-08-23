let nav = 0;
const getCalendar = document.getElementById("calendar");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function nextButton() {
  document.getElementById("nextButton")?.addEventListener("click", () => {
    nav++;
    main();
  });
}

function backButton() {
  document.getElementById("backButton")?.addEventListener("click", () => {
    nav--;
    main();
  });
}

function main() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const month = dt.getMonth();
  const year = dt.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const dateString = firstDayOfMonth.toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const lastDayOfLastMonth = new Date(year, month, 0).getDate();

  const monthHeading = document.getElementById("month-heading");
  monthHeading.innerText = `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`;
  getCalendar.innerHTML = "";

  const getFirstDayMonth = dateString.split(", ")[0];
  const days = weekDays.indexOf(getFirstDayMonth);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysAndMonthTotal = days + daysInMonth;
  const daysArr = new Array(daysAndMonthTotal);
  const day = dt.getDate();

  for (let i = 1; i <= daysArr.length; i++) {
    const square = document.createElement("div");
    square.classList.add("day");

    const addedDay = i - days;

    if (i > days) {
      square.innerText = addedDay.toString();

      if (addedDay === day && nav === 0) {
        square.id = "currentDay";
      }
    } else {
      square.innerText = (lastDayOfLastMonth - days + i).toString();
      square.classList.add("prev-day");
    }
    getCalendar.appendChild(square);
  }
}

nextButton();
backButton();
main();
