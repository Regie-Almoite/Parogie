//Render all the reservations stored in the localStorage into a table
let reservationListDisplay = document.getElementById("allReservationsList");

let allReservations = JSON.parse(localStorage.getItem("allReservation"));

console.log(allReservations[0]);
for (let x in allReservations) {
    let tableRow = document.createElement("tr");
    tableRow.id = allReservations[x].reservationId;
    tableRow.innerHTML = `
        <td>${allReservations[x].reservationId}</td>
        <td>${allReservations[x].bookData.arrivalMonth} ${
        allReservations[x].bookData.arrivalDay
    }, ${new Date().getFullYear()}</td>
        <td>${allReservations[x].bookData.departureMonth} ${
        allReservations[x].bookData.departureDay
    }, ${new Date().getFullYear()}</td>
        <td>${allReservations[x].bookData.roomDetails.roomName}</td>
        <td>${allReservations[x].paymentData.transactionDate}</td>
        <td>${allReservations[x].bookData.totalAmountDue}</td>
    `;
    reservationListDisplay.appendChild(tableRow);
}
console.log(allReservations);
