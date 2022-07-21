function monthValidation(months) {
    let arrivalMonth = document.getElementById("arrivalMonth").textContent;
    let departureMonth = document.getElementById("departureMonth").textContent;

    let arrivalIndex;
    let departureIndex;
    for (let x in months) {
        if (months[x] == arrivalMonth) {
            arrivalIndex = x;
        }

        if (months[x] == departureMonth) {
            departureIndex = x;
        }
    }

    let arrivalDay = document.getElementById("arrivalDay").textContent;
    let departureDay = document.getElementById("departureDay").textContent;

    if (arrivalIndex > departureIndex) {
        let errorDisplay = document.getElementById("errorMessages");
        let errorMessage =
            "The arrival month must be behind the departure month";
        errorDisplay.innerHTML = `<p class="error">${errorMessage}</p>`;

        errorDisplay.style.transform = "translate(-50%, 0)";
        setTimeout(() => {
            errorDisplay.style.transform = "translate(-50%, -150%)";
        }, 5000);

        localStorage.setItem("error", errorMessage);
    } else if (arrivalMonth == departureMonth && arrivalDay >= departureDay) {
        let errorDisplay = document.getElementById("errorMessages");
        let errorMessage = "The arrival day must be behind the departure day";
        errorDisplay.innerHTML = `<p class="error">${errorMessage}</p>`;

        errorDisplay.style.transform = "translate(-50%, 0)";
        setTimeout(() => {
            errorDisplay.style.transform = "translate(-50%, -150%)";
        }, 5000);

        localStorage.setItem("error", errorMessage);
    } else {
        localStorage.setItem("error", "");
    }
}

export { monthValidation };
