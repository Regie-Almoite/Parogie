import { monthValidation } from "./montValidation.js";
import { displayArrivalDays } from "./displayArrivalDays.js";

// A function that renders the months and and onclick event to the month selection
function displayArrivalMonths(months) {
    let arrivalMonthSelection = document.getElementById("arrivalSelectMonth");

    for (let x in months) {
        let monthOption = document.createElement("option");
        monthOption.value = months[x];
        monthOption.textContent = months[x];
        arrivalMonthSelection.appendChild(monthOption);
    }

    arrivalMonthSelection.addEventListener("change", (event) => {
        let selectedArrivalMonth = event.target.value;
        let arrivalMonthDisplay = document.getElementById("arrivalMonth");
        arrivalMonthDisplay.textContent = selectedArrivalMonth;

        monthValidation(months);
        displayArrivalDays(months, selectedArrivalMonth);
    });
}

export { displayArrivalMonths };
