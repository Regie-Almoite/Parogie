function displayArrivalMonths(months) {
    let arrivalMonthSelection = document.getElementById("arrivalSelectMonth");

    for (let x in months) {
        let monthOption = document.createElement("option");
        monthOption.value = months[x];
        monthOption.textContent = months[x];

        arrivalMonthSelection.appendChild(monthOption);
    }
}

export { displayArrivalMonths };
