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

let roomTitleDisplay = document.getElementById("roomTitle");
roomTitleDisplay.textContent = bookingData.roomDetails.roomName;

let guestCapacityDisplay = document.getElementById("guestCapacity");
let bedsDisplay = document.getElementById("beds");
let telephoneDisplay = document.getElementById("telephone");
let airConditionDisplay = document.getElementById("airConditioned");
let wirelessDisplay = document.getElementById("wirelessInternet");

let overviewDisplay = document.getElementById("overview");

guestCapacityDisplay.textContent = bookingData.roomDetails.capacity;
bedsDisplay.textContent = bookingData.roomDetails.amenities[0];
telephoneDisplay.textContent = bookingData.roomDetails.amenities[1];
airConditionDisplay.textContent = bookingData.roomDetails.amenities[2];
wirelessDisplay.textContent = bookingData.roomDetails.amenities[3];

overviewDisplay.textContent = bookingData.roomDetails.roomDescription;

let bookBtn = document.getElementById("bookButton");

bookBtn.addEventListener("click", () => {
    bookingData.aDay = arrivalDayDisplay.innerHTML;
    bookingData.aMonth = arrivalMonthDisplay.innerHTML;
    bookingData.dMonth = departureMonthDisplay.innerHTML;
    bookingData.dDay = departureDayDisplay.innerHTML;

    localStorage.setItem("bookData", JSON.stringify(bookingData));

    console.log(bookingData);
});
