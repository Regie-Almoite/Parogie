// A function that adds click event to the book now buttons
function bookNow(rooms) {
    let bookNowBtns = document.querySelectorAll("#roomList a");

    bookNowBtns.forEach((bookNowbtn) => {
        bookNowbtn.addEventListener("click", (event) => {
            let error = localStorage.getItem("error");
            let aMonth = document.getElementById("arrivalMonth");
            let aDay = document.getElementById("arrivalDay");
            let dMonth = document.getElementById("departureMonth");
            let dDay = document.getElementById("departureDay");
            let roomId = event.target.getAttribute("id");

            if (error != "") {
                event.preventDefault();
                document.querySelector(
                    "#errorMessages .error"
                ).innerHTML = `${error} <i class="fa-solid fa-xmark"></i>`;
                document.getElementById("errorMessages").style.transform =
                    "translate(-50%, 0)";
                setTimeout(() => {
                    document.getElementById("errorMessages").style.transform =
                        "translate(-50%, -150%)";
                }, 5000);
            } else {
                let bookDetails = {
                    roomDetails: rooms[Number(roomId)],
                    arrivalMonth: aMonth.textContent,
                    arrivalDay: aDay.textContent,
                    departureMonth: dMonth.textContent,
                    departureDay: dDay.textContent,
                    guest: document.getElementById("guest").textContent,
                };

                localStorage.setItem("bookData", JSON.stringify(bookDetails));
            }
        });
    });
}

export { bookNow };
