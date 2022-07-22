import { monthValidation } from "./montValidation.js";
import { displayArrivalDays } from "./displayArrivalDays.js";
import { getTotalAmount } from "./getTotalAmount.js";

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
        getTotalAmount();
    });
}

export { displayArrivalMonths };
