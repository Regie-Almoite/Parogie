import { getDaysInMonth } from "./getDaysInMonth.js";

function displayDepartureDates(months) {
    let selectMonthDisplay = document.getElementById("departureMonth");
    let selectDayDisplay = document.getElementById("departureDay");
    let selectMonth = document.getElementById("departureSelectMonth");
    let selectDay = document.getElementById("departureSelectDay");
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

export { displayDepartureDates };
