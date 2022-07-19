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

bookBtn.addEventListener("click", (event) => {
    let errors = localStorage.getItem("error");
    let aMonth = document.getElementById("arrivalMonth");
    let aDay = document.getElementById("arrivalDay");
    let dMonth = document.getElementById("departureMonth");
    let dDay = document.getElementById("departureDay");
    if (errors != "") {
        event.preventDefault();
        document.querySelector(
            "#errorMessages .error"
        ).innerHTML = `${errors} <i class="fa-solid fa-xmark"></i>`;
        document.getElementById("errorMessages").style.transform =
            "translate(-50%, 0)";
        setTimeout(() => {
            document.getElementById("errorMessages").style.transform =
                "translate(-50%, -150%)";
        }, 5000);
    } else if (
        aMonth.textContent == dMonth.textContent &&
        aDay.textContent == dDay.textContent
    ) {
        console.log("here 2.2");
        event.preventDefault();
        document.querySelector("#errorMessages .error").innerHTML = `
                   The departure day must be ahead of the arrival day <i class="fa-solid fa-xmark"></i>
                `;
        document.getElementById("errorMessages").style.transform =
            "translate(-50%, 0)";
        setTimeout(() => {
            document.getElementById("errorMessages").style.transform =
                "translate(-50%, -150%)";
        }, 5000);
    } else {
        bookingData.aDay = arrivalDayDisplay.innerHTML;
        bookingData.aMonth = arrivalMonthDisp.innerHTML;
        bookingData.dMonth = departureMonthDisplay.innerHTML;
        bookingData.dDay = departureDayDisplay.innerHTML;

        let arrMonth = bookingData.aMonth;
        let arrDay = bookingData.aDay;
        let depMonth = bookingData.dMonth;
        let depDay = bookingData.dDay;
        let year = new Date().getFullYear();
        let arrivalDate = new Date(`${arrMonth}/${arrDay}/${year}`);
        let departureDate = new Date(`${depMonth}/${depDay}/${year}`);

        let difference = departureDate.getTime() - arrivalDate.getTime();
        let daysOfStay = Math.ceil(difference / (1000 * 3600 * 24));

        bookingData.numberOfStay = daysOfStay;
        bookingData.totalAmoutDue = daysOfStay * bookingData.price;

        console.log(bookingData);

        localStorage.setItem("bookData", JSON.stringify(bookingData));
    }
});
