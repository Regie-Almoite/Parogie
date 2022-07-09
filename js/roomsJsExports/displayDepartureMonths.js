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
}

export { displayDepartureMonths };
