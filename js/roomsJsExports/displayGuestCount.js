function displayGuestCount() {
    let countDisplay = document.getElementById("guest");
    let selectGuestCount = document.getElementById("guestCount");

    selectGuestCount.addEventListener("change", () => {
        countDisplay.textContent = selectGuestCount.value;
    });
}

export { displayGuestCount };
