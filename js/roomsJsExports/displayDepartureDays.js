import { getDaysInMonth } from "./getDaysInMonth.js";
import { dayValidation } from "./dayValidation.js";

//A function that display departure days that depends on the selected departure month and add onclick event to the departure day selection
function displayDepartureDays(months, month) {
    let departureSelectDay = document.getElementById("departureSelectDay");
    let days;
    for (let x in months) {
        if (months[x] == month) {
            days = getDaysInMonth(x);
        }
    }

    let departureDayOptions = "";
    for (let i = 1; i <= days; i++) {
        let departureDay = document.getElementById("departureDay").textContent;
        if (departureDay == i) {
            departureDayOptions += `<option value="${i}" selected>${i}</option>`;
        } else {
            departureDayOptions += `<option value="${i}">${i}</option>`;
        }
    }
    departureSelectDay.innerHTML = departureDayOptions;

    departureSelectDay.addEventListener("change", (event) => {
        let departureDay = event.target.value;
        let departureDayDisplay = document.getElementById("departureDay");
        departureDayDisplay.innerText = departureDay;
        dayValidation();
    });
}

export { displayDepartureDays };
