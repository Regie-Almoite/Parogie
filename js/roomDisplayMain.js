import { displayArrivalDates } from "./roomsJsExports/displayArrivalDates.js";
import { displayArrivalMonths } from "./roomsJsExports/displayArrivalMonths.js";
import { displayDepartureDates } from "./roomsJsExports/displayDepartureDates.js";
import { displayDepartureMonths } from "./roomsJsExports/displayDepartureMonths.js";

let monthList = [
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

let bookingData = JSON.parse(localStorage.getItem("bookData"));

let arrivalMonthDisplay = document.getElementById("arrivalMonth");
let arrivalDayDisplay = document.getElementById("arrivalDay");
let departureMonthDisplay = document.getElementById("departureMonth");
let departureDayDisplay = document.getElementById("departureDay");
let guestDisplay = document.getElementById("guest");

console.log(bookingData);

arrivalMonthDisplay.textContent = bookingData.aMonth;
arrivalDayDisplay.textContent = bookingData.aDay;
departureMonthDisplay.textContent = bookingData.dMonth;
departureDayDisplay.textContent = bookingData.dDay;
guestDisplay.textContent = bookingData.guest;

displayArrivalDates(monthList);
displayArrivalMonths(monthList);
displayDepartureMonths(monthList);
displayDepartureDates(monthList);
