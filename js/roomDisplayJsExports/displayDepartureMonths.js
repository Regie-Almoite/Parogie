import { monthValidation } from "./montValidation.js";
import { displayDepartureDays } from "./displayDepartureDays.js";
import { getTotalAmount } from "./getTotalAmount.js";
function displayDepartureMonths(months) {
    let departureMonthSelection = document.getElementById(
        "departureSelectMonth"
    );

    for (let x in months) {
        let monthOption = document.createElement("option");
        monthOption.value = months[x];
        monthOption.textContent = months[x];

        departureMonthSelection.appendChild(monthOption);
    }

    departureMonthSelection.addEventListener("change", (event) => {
        let departureSelectedMonth = event.target.value;
        let departureMonthDisplay = document.getElementById("departureMonth");
        departureMonthDisplay.innerText = departureSelectedMonth;
        monthValidation(months);
        displayDepartureDays(months, departureSelectedMonth);
        getTotalAmount();
    });
}

export { displayDepartureMonths };
