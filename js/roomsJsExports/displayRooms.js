function displayRooms(rooms) {
    let roomListDisplay = document.getElementById("roomList");
    for (let x in rooms) {
        let room = document.createElement("div");
        room.classList = "room-container";
        room.id = x;
        room.innerHTML = `
                    <div class="image-container">
                        <img src="${rooms[x].image}"
                    </div>
                    <div class="room-body">
                        <h3 class="room-title">${rooms[x].roomName}</h3>
                        <p class="room-capacity">Capacity: <span>${rooms[x].capacity}</span></p>
                        <div class="amenities-container">
                            <p class ="amenites-title">Amenitites:</p>
                            <ul class="amenities-list">
                                <li><i class="fa-solid fa-bed"></i>${rooms[x].amenities[0]}</li>
                                <li><i class="fa-solid fa-phone"></i>${rooms[x].amenities[1]}</li>
                                <li><i class="fa-solid fa-fan"></i>${rooms[x].amenities[2]}</li>
                                <li><i class="fa-solid fa-wifi"></i>${rooms[x].amenities[3]}</li>
                            </ul>
                        </div>
                        <div class="bookNowBtn-container">
                        <a class="bookNowBtn" href="./roomDisplay.html" id="${x}">Book Now</a>
                        </div>
                    </div>
                `;

        roomListDisplay.appendChild(room);
    }
}

export { displayRooms };
