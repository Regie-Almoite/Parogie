import { displayRooms } from "./displayRooms.js";
import { bookNow } from "./bookNow.js";

// A function that adds onclick event to the select guest count and renders the filtered rooms depending on the selected gues count
function displayGuestCount(rooms) {
    let countDisplay = document.getElementById("guest");
    let selectGuestCount = document.getElementById("guestCount");

    selectGuestCount.addEventListener("change", () => {
        let roomListDisplay = document.getElementById("roomList");
        let filteredRooms = [];
        filteredRooms = rooms.filter((room) => {
            return room.capacity >= selectGuestCount.value;
        });

        roomListDisplay.innerHTML = "";

        for (let x in filteredRooms) {
            let room = document.createElement("div");
            room.classList = "room-container";
            room.id = x;
            room.innerHTML = `
                        <div class="image-container">
                            <p class="price">${filteredRooms[x].price}</p>
                            <img src="${filteredRooms[x].image}"
                        </div>
                        <div class="room-body">
                            <h3 class="room-title">${filteredRooms[x].roomName}</h3>
                            <p class="room-capacity">Capacity: <span>${filteredRooms[x].capacity}</span></p>
                            <div class="amenities-container">
                                <p class ="amenites-title">Amenitites:</p>
                                <ul class="amenities-list">
                                    <li><i class="fa-solid fa-bed"></i>${filteredRooms[x].amenities[0]}</li>
                                    <li><i class="fa-solid fa-phone"></i>${filteredRooms[x].amenities[1]}</li>
                                    <li><i class="fa-solid fa-fan"></i>${filteredRooms[x].amenities[2]}</li>
                                    <li><i class="fa-solid fa-wifi"></i>${filteredRooms[x].amenities[3]}</li>
                                </ul>
                            </div>
                            <div class="bookNowBtn-container">
                                <a class="bookNowBtn" href="./roomDisplay.html" id="${filteredRooms[x].roomId}">Book Now</a>
                            </div>
                        </div>
                    `;

            roomListDisplay.appendChild(room);
        }

        bookNow(rooms);
        countDisplay.textContent = selectGuestCount.value;
    });
}

export { displayGuestCount };
