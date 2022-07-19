function bookNow(rooms) {
    let bookNowBtns = document.querySelectorAll("#roomList a");

    bookNowBtns.forEach((bookNowbtn) => {
        bookNowbtn.addEventListener("click", (event) => {
            let errors = localStorage.getItem("error");

            let aMonth = document.getElementById("arrivalMonth");
            let aDay = document.getElementById("arrivalDay");
            let dMonth = document.getElementById("departureMonth");
            let dDay = document.getElementById("departureDay");

            if (errors != "") {
                event.preventDefault();
                console.log("here");
                document.querySelector(
                    "#errorMessages .error"
                ).innerHTML = `${errors} <i class="fa-solid fa-xmark"></i>`;
                document.getElementById("errorMessages").style.transform =
                    "translate(-50%, 0)";
                setTimeout(() => {
                    document.getElementById("errorMessages").style.transform =
                        "translate(-50%, -150%)";
                }, 5000);
            } else if (
                aMonth.textContent == dMonth.textContent &&
                aDay.textContent == dDay.textContent
            ) {
                console.log("here 2.1");
                event.preventDefault();
                document.querySelector("#errorMessages .error").innerHTML = `
                   The departure day must be ahead of the arrival day <i class="fa-solid fa-xmark"></i>
                `;
                document.getElementById("errorMessages").style.transform =
                    "translate(-50%, 0)";
                setTimeout(() => {
                    document.getElementById("errorMessages").style.transform =
                        "translate(-50%, -150%)";
                }, 5000);
            } else {
                let roomId = event.target.getAttribute("id");
                console.log(roomId);
                // event.preventDefault();
                let bookDetails = {
                    roomDetails: rooms[Number(roomId)],
                    aMonth: document.getElementById("arrivalMonth").textContent,
                    aDay: document.getElementById("arrivalDay").textContent,
                    dMonth: document.getElementById("departureMonth")
                        .textContent,
                    dDay: document.getElementById("departureDay").textContent,
                    guest: document.getElementById("guest").textContent,
                    totalAmountDue:
                        rooms[Number(roomId)].price *
                        rooms[Number(roomId)].capacity,
                };

                localStorage.setItem("bookData", JSON.stringify(bookDetails));
            }
        });
    });
}

export { bookNow };
