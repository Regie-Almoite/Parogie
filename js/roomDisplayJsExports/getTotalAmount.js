function getTotalAmount() {
    let bookData = JSON.parse(localStorage.getItem("bookData"));

    let aMonth = document.getElementById("arrivalMonth").textContent;
    let aDay = document.getElementById("arrivalDay").textContent;
    let dMonth = document.getElementById("departureMonth").textContent;
    let dDay = document.getElementById("departureDay").textContent;
    let year = new Date().getFullYear();
    let aTime = new Date(`${aMonth} / ${aDay} / ${year}`).getTime();
    let dTime = new Date(`${dMonth} / ${dDay} / ${year}`).getTime();
    let timeDifference = dTime - aTime;
    let daysOfStay = Math.ceil(timeDifference / (1000 * 3600 * 24));

    let totalAmountDue = bookData.roomDetails.price * daysOfStay;

    let daysOfStayDisplay = document.getElementById("daysOfStay");
    let totalAmountDisplay = document.getElementById("totalAmount");

    if (localStorage.getItem("error") != "") {
        document.getElementById("errorMessages").style.transform =
            "translate(-50%, 0)";
        setTimeout(() => {
            document.getElementById("errorMessages").style.transform =
                "translate(-50%, -150%)";
        }, 5000);
        daysOfStayDisplay.innerText = "";
        totalAmountDisplay.innerText = "";
    } else {
        daysOfStayDisplay.innerText = daysOfStay;
        totalAmountDisplay.innerText = `₱${totalAmountDue}`;
        bookData.totalAmountDue = totalAmountDue;
        localStorage.setItem("bookData", JSON.stringify(bookData));
    }

    return totalAmountDue;
}

export { getTotalAmount };
