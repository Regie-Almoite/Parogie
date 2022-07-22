//A function that returns the total amount to be paid depending on the rooms price per day and the total days between the arrival date and the departure date
function getTotalAmount(bookData) {
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
    daysOfStayDisplay.innerText = daysOfStay;
    totalAmountDisplay.innerText = totalAmountDue;

    return totalAmountDue;
}

export { getTotalAmount };
