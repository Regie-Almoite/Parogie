//A function the stores the guest payment input to the localstorage and also adding the payment details and book details to the reservations list
function getForm() {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let comp = document.getElementById("company").value;
    let zip = document.getElementById("zipcode").value;
    let City = document.getElementById("city").value;
    let Email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;
    let cardNum = document.getElementById("cardNumber").value;
    let expi = document.getElementById("expiration").value;
    let cv = document.getElementById("CVC").value;

    let dayToday = new Date().getDate();
    let monthToday = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    let paymentDetails = {
        firstName: fname,
        lastName: lname,
        Company: comp,
        ZIP: zip,
        City: City,
        EMail: Email,
        Phone: phoneNum,
        Card: cardNum,
        Expiration: expi,
        CV: cv,
        transactionDate: `${dayToday}/${monthToday}/${year}`,
    };

    localStorage.setItem("paymentData", JSON.stringify(paymentDetails));

    let allReserveEntries = JSON.parse(localStorage.getItem("allReservation"));

    if (allReserveEntries == null) allReserveEntries = [];

    let data = {
        reservationId: allReserveEntries.length,
        bookData: JSON.parse(localStorage.getItem("bookData")),
        paymentData: JSON.parse(localStorage.getItem("paymentData")),
    };

    allReserveEntries.push(data);

    localStorage.setItem("allReservation", JSON.stringify(allReserveEntries));
}

function paymentMethod() {
    let cardNum = document.getElementById("cardNumber").value;
    let expi = document.getElementById("expiration").value;
    let cv = document.getElementById("CVC").value;

    // localStorage.setItem("cardNumbers", cardNum);
    // localStorage.setItem("Expiration", expi);
    // localStorage.setItem("CV", cv);

    let cardPayment = document.getElementById("cardUser");
    let paypalPayment = document.getElementById("paypalUser");
    cardPayment.style.display = "block";
    paypalPayment.style.display = "none";
}

function paypalMethod() {
    let paypalPayment = document.getElementById("paypalUser");
    let cardPayment = document.getElementById("cardUser");
    cardPayment.style.display = "none";
    paypalPayment.style.display = "block";
}
