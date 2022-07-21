function dayValidation() {
    let arrivalmonth = document.getElementById("arrivalMonth").textContent;
    let arrivalDay = document.getElementById("arrivalDay").textContent;
    let departureMonth = document.getElementById("departureMonth").textContent;
    let departureDay = document.getElementById("departureDay").textContent;

    if (arrivalDay >= departureDay && arrivalmonth == departureMonth) {
        console.log("here");
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

export { dayValidation };
