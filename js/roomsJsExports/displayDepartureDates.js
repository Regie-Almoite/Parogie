import { getDaysInMonth } from "./getDaysInMonth.js";

function displayDepartureDates(months) {
    let selectMonthDisplay = document.getElementById("departureMonth");
    let selectDayDisplay = document.getElementById("departureDay");
    let selectMonth = document.getElementById("departureSelectMonth");
    let selectDay = document.getElementById("departureSelectDay");
    let selectedMonth;
    let days;
    let options = "";

    for (let x in months) {
        if (months[x] == selectMonthDisplay.textContent) {
            days = getDaysInMonth(x);
        }
    }

    for (let i = 1; i <= days; i++) {
        options += `<option value="${i}">${i}</option>`;
    }

    selectDay.innerHTML = options;

    selectDay.addEventListener("change", () => {
        selectDayDisplay.textContent = selectDay.value;
    });

    // Render the days after selecting different months
    selectMonth.addEventListener("change", () => {
        options = "";
        selectedMonth = selectMonth.value;
        selectMonthDisplay.textContent = selectedMonth;

        for (let x in months) {
            if (months[x] == selectedMonth) {
                days = getDaysInMonth(x);
            }
        }

        for (let i = 1; i <= days; i++) {
            options += `<option value="${i}">${i}</option>`;
        }

        selectDay.addEventListener("change", () => {
            selectDayDisplay.textContent = selectDay.value;
        });
    });
}

export { displayDepartureDates };
