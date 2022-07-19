import { getDaysInMonth } from "./getDaysInMonth.js";

function displayDepartureDates(months) {
    let selectMonthDisplay = document.getElementById("departureMonth");
    let selectDayDisplay = document.getElementById("departureDay");
    let selectMonth = document.getElementById("departureSelectMonth");
    let selectDay = document.getElementById("departureSelectDay");
    let selectedMonth;
    let days;
    let options = "";
    let aDay;
    let dDay;
    let errorDisplay = document.getElementById("errorMessages");
    let errorMessage = "";
    for (let x in months) {
        if (months[x] == selectMonthDisplay.textContent) {
            days = getDaysInMonth(x);
        }
    }

    for (let i = 1; i <= days; i++) {
        options += `<option value="${i}">${i}</option>`;
    }

    selectDay.innerHTML = options;

    selectDay.addEventListener("change", (event) => {
        aDay = document.getElementById("arrivalSelectDay").value;
        dDay = event.target.value;
        console.log(aDay, dDay);
        if (aDay == dDay || aDay > dDay) {
            console.log("here");
            errorMessage = "The departure day must be ahead of the arrival day";
            errorDisplay.innerHTML = `<p class="error">${errorMessage}</p>`;
            localStorage.setItem("error", errorMessage);
            selectDayDisplay.textContent = selectDay.value;
            errorDisplay.style.transform = "translate(-50%, 0)";
            setTimeout(() => {
                errorDisplay.style.transform = "translate(-50%,-150%)";
            }, 5000);
        } else {
            localStorage.setItem("error", "");
            selectDayDisplay.textContent = selectDay.value;
        }
    });

    // Render the days after selecting different months
    selectMonth.addEventListener("change", () => {
        let aMonth = document.getElementById("arrivalMonth").textContent;
        aDay = document.getElementById("arrivalDay").textContent;
        let dMonth = event.target.value;
        dDay = document.getElementById("departureDay").textContent;
        let aMonthIndex;
        let dMonthIndex;

        options = "";

        for (let x in months) {
            if (months[x] == dMonth) {
                dMonthIndex = x;
                console.log(dMonthIndex);
            }
            if (months[x] == aMonth) {
                aMonthIndex = x;
                console.log(aMonthIndex);
            }
        }

        if (dMonthIndex == aMonthIndex) {
            if (dDay == aDay || dDay < aDay) {
                errorMessage =
                    "The departure day must be ahead of the arrival day";
                localStorage.setItem("error", errorMessage);

                errorDisplay.innerHTML = `<p class="error">${errorMessage} <i class="fa-solid fa-xmark"></i></p>`;

                errorDisplay.style.transform = "translate(-50%, 0)";
                setTimeout(() => {
                    errorDisplay.style.transform = "translate(-50%, -150%)";
                }, 5000);

                selectedMonth = selectMonth.value;
                selectMonthDisplay.textContent = selectedMonth;
            } else {
                localStorage.setItem("error", "");
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

                selectDay.innerHTML = options;
            }
        } else if (dMonthIndex < aMonthIndex) {
            errorMessage =
                "The departure month must be ahead of the arrival month";
            localStorage.setItem("error", errorMessage);
            errorDisplay.innerHTML = `<p class="error">${errorMessage} <i class="fa-solid fa-xmark"></i></p>`;
            errorDisplay.style.transform = "translate(-50%, 0)";
            setTimeout(() => {
                errorDisplay.style.transform = "translate(-50%,-150%)";
            }, 5000);

            selectedMonth = selectMonth.value;
            selectMonthDisplay.textContent = selectedMonth;
        } else {
            localStorage.setItem("error", "");

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

            selectDay.innerHTML = options;
        }

        selectDay.addEventListener("change", () => {
            aDay = document.getElementById("arrivalSelectDay").value;
            dDay = event.target.value;
            if (aDay == dDay || aDay > dDay) {
                errorMessage =
                    "The departure day must be ahead of the arrival day";
                localStorage.setItem("error", errorMessage);

                selectDayDisplay.textContent = selectDay.value;
                errorDisplay.style.transform = "translate(-50%, 0)";
                setTimeout(() => {
                    errorDisplay.style.transform = "translate(-50%,-150%)";
                }, 5000);
            } else {
                localStorage.setItem("error", "");
                selectDayDisplay.textContent = selectDay.value;
            }
        });
    });
}

export { displayDepartureDates };
