import { getDaysInMonth } from "./getDaysInMonth.js";

function displayArrivalDates(months) {
    let selectMonthDisplay = document.getElementById("arrivalMonth");
    let selectDayDisplay = document.getElementById("arrivalDay");
    let selectMonth = document.getElementById("arrivalSelectMonth");
    let selectDay = document.getElementById("arrivalSelectDay");
    let selectedMonth;
    let days;

    for (let x in months) {
        if (months[x] == selectMonthDisplay.textContent) {
            days = getDaysInMonth(x);
        }
    }

    for (let i = 1; i <= days; i++) {
        let dayOption = document.createElement("option");
        dayOption.value = i;
        dayOption.textContent = i;
        selectDay.appendChild(dayOption);
    }

    selectDay.addEventListener("change", () => {
        selectDayDisplay.textContent = selectDay.value;
    });

    selectMonth.addEventListener("change", () => {
        selectedMonth = selectMonth.value;
        selectMonthDisplay.textContent = selectedMonth;

        for (let x in months) {
            if (months[x] == selectedMonth) {
                days = getDaysInMonth(x);
            }
        }

        for (let i = 1; i <= days; i++) {
            let dayOption = document.createElement("option");
            dayOption.value = i;
            dayOption.textContent = i;
            selectDay.appendChild(dayOption);
        }

        selectDay.addEventListener("change", () => {
            selectDayDisplay.textContent = selectDay.value;
        });
    });
}

export { displayArrivalDates };
