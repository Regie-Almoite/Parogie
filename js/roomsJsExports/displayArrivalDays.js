import { getDaysInMonth } from "./getDaysInMonth.js";
import { dayValidation } from "./dayValidation.js";

//A function that display arrival days that depends on the selected arrival month and add onclick event to the arrival day selection
function displayArrivalDays(months, month) {
    let arrivalSelectDay = document.getElementById("arrivalSelectDay");
    let days;
    for (let x in months) {
        if (months[x] == month) {
            days = getDaysInMonth(x);
        }
    }

    let arrivalSelectOptions = "";
    for (let i = 1; i <= days; i++) {
        let arrivalDay = document.getElementById("arrivalDay").textContent;
        if (arrivalDay == i) {
            arrivalSelectOptions += `<option value="${i}" selected>${i}</option>`;
        } else {
            arrivalSelectOptions += `<option value="${i}">${i}</option>`;
        }
    }
    arrivalSelectDay.innerHTML = arrivalSelectOptions;

    arrivalSelectDay.addEventListener("change", (event) => {
        let arrivalDay = event.target.value;
        let arrivalDayDisplay = document.getElementById("arrivalDay");
        arrivalDayDisplay.innerText = arrivalDay;
        dayValidation();
    });
}

export { displayArrivalDays };
