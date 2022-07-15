function getForm() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let comp = document.getElementById("company").value;
  let zip = document.getElementById("zipcode").value;
  let City = document.getElementById("city").value;
  let Email = document.getElementById("email").value;
  let phoneNum = document.getElementById("phone").value;

  localStorage.setItem("detail1", fname);
  localStorage.setItem("detail2", lname);
  localStorage.setItem("detail3", comp);
  localStorage.setItem("detail4", zip);
  localStorage.setItem("detail5", City);
  localStorage.setItem("detail6", Email);
  localStorage.setItem("detail7", phoneNum);
}

function paymentMethod() {
  let cardNum = document.getElementById("cardNumber").value;
  let expi = document.getElementById("expiration").value;
  let cv = document.getElementById("CVC").value;

  localStorage.setItem("cardNumbers", cardNum);
  localStorage.setItem("Expiration", expi);
  localStorage.setItem("CV", cv);

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
