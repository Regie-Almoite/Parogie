import { displayArrivalMonths } from "./roomDisplayJsExports/displayArrivalMonths.js";
import { displayArrivalDays } from "./roomDisplayJsExports/displayArrivalDays.js";
import { displayDepartureMonths } from "./roomDisplayJsExports/displayDepartureMonths.js";
import { displayDepartureDays } from "./roomDisplayJsExports/displayDepartureDays.js";
import { getTotalAmount } from "./roomDisplayJsExports/getTotalAmount.js";

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

//Guest input and the selected room details
let bookingData = JSON.parse(localStorage.getItem("bookData"));

console.log(bookingData);

//Display the previous guest input to the roomDisplay page
let arrivalMonthDisplay = document.getElementById("arrivalMonth");
let arrivalDayDisplay = document.getElementById("arrivalDay");
let departureMonthDisplay = document.getElementById("departureMonth");
let departureDayDisplay = document.getElementById("departureDay");
let guestDisplay = document.getElementById("guest");

arrivalMonthDisplay.textContent = bookingData.arrivalMonth;
arrivalDayDisplay.textContent = bookingData.arrivalDay;
departureMonthDisplay.textContent = bookingData.departureMonth;
departureDayDisplay.textContent = bookingData.departureDay;
guestDisplay.textContent = bookingData.guest;

getTotalAmount(bookingData);
displayArrivalMonths(monthList);
displayArrivalDays(monthList, bookingData.arrivalMonth);
displayDepartureMonths(monthList);
displayDepartureDays(monthList, bookingData.departureMonth);

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

//When Book button is clicked the user will redirect to the payment page
bookBtn.addEventListener("click", (event) => {
    let error = localStorage.getItem("error");
    let bookingData = JSON.parse(localStorage.getItem("bookData"));
    let aMonth = document.getElementById("arrivalMonth");
    let aDay = document.getElementById("arrivalDay");
    let dMonth = document.getElementById("departureMonth");
    let dDay = document.getElementById("departureDay");

    if (error != "") {
        event.preventDefault();
        document.querySelector(
            "#errorMessages .error"
        ).innerHTML = `${error} <i class="fa-solid fa-xmark"></i>`;
        document.getElementById("errorMessages").style.transform =
            "translate(-50%, 0)";
        setTimeout(() => {
            document.getElementById("errorMessages").style.transform =
                "translate(-50%, -150%)";
        }, 5000);
    } else {
        bookingData.arrivalDay = aDay.textContent;
        bookingData.arrivalMonth = aMonth.textContent;
        bookingData.departureMonth = dMonth.textContent;
        bookingData.departureDay = dDay.textContent;
        bookingData.totalAmountDue = getTotalAmount();

        localStorage.setItem("bookData", JSON.stringify(bookingData));
    }
});
