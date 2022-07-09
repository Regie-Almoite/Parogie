function bookNow(rooms) {
    let bookNowBtns = document.querySelectorAll("#roomList a");

    bookNowBtns.forEach((bookNowbtn) => {
        bookNowbtn.addEventListener("click", (event) => {
            let roomID = event.target.getAttribute("id");
            let bookDetails = {
                roomDetails: rooms[Number(roomID)],
                aMonth: document.getElementById("arrivalMonth").textContent,
                aDay: document.getElementById("arrivalDay").textContent,
                dMonth: document.getElementById("departureMonth").textContent,
                dDay: document.getElementById("departureDay").textContent,
                guest: document.getElementById("guest").textContent,
            };

            localStorage.setItem("bookData", JSON.stringify(bookDetails));
        });
    });
}

export { bookNow };
