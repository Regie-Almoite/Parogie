//Render some guest payment details and booked room details

var bookData = JSON.parse(localStorage.getItem("bookData"));
let paymentData = JSON.parse(localStorage.getItem("paymentData"));

console.log(bookData);
console.log(paymentData);
let fullName = document.getElementById("nameDisplay");
let phoneNum = document.getElementById("phoneDisplay");
let city = document.getElementById("cityDisplay");
let company = document.getElementById("companyDisplay");
let email = document.getElementById("emailDisplay");
let zip = document.getElementById("zipDisplay");
let address = document.getElementById("addressDisplay");

fullName.textContent = paymentData.firstName + " " + paymentData.lastName;
phoneNum.textContent = paymentData.Phone;
city.textContent = paymentData.City;
company.textContent = paymentData.Company;
email.textContent = paymentData.EMail;
zip.textContent = paymentData.ZIP;

let transactionTime = document.getElementById("transactionTimeDisplay");
transactionTime.innerText = `${paymentData.transactionDate}`;

let card = document.getElementById("cardDisplay");
let fullCardNum = paymentData.Card;
let last4Digits = fullCardNum.slice(-4);
let maskedCard = last4Digits.padStart(fullCardNum.length, "*");
card.innerText = maskedCard;

let totalAmount1 = document.getElementById("totalAmountDisplay");
totalAmount1.innerText = `₱${bookData.totalAmountDue}`;

let roomName = document.getElementById("roomNameDisplay");
roomName.innerText = `${bookData.roomDetails.roomName}`;

let arrivalDate = document.getElementById("arrivalDateDisplay");
arrivalDate.innerText = `(${bookData.arrivalMonth} ${
    bookData.arrivalDay
}, ${new Date().getFullYear()})`;
let guestCount = document.getElementById("guestCountDisplay");
guestCount.innerText = `${bookData.guest}`;
let totalAmount2 = document.getElementById("totalAmountDisplay2");
totalAmount2.innerText = `₱${bookData.totalAmountDue}`;
