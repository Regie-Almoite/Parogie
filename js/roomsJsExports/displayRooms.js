function displayRooms(rooms) {
    let roomListDisplay = document.getElementById("roomList");
    for (let x in rooms) {
        let room = document.createElement("div");
        room.id = x;
        room.innerHTML = `
                    <h3>${rooms[x].roomName}</h3>
                    <p>Capacity <span>${rooms[x].capacity}</span></p>
                    <div>
                        <p>Amenitites</p>
                        <ul>
                            <li>${rooms[x].amenities[0]}</li>
                            <li>${rooms[x].amenities[1]}</li>
                            <li>${rooms[x].amenities[2]}</li>
                            <li>${rooms[x].amenities[3]}</li>
                        </ul>
                    </div>
                    <a href="./roomDisplay.html" id="${x}">Book Now</a>
                `;

        roomListDisplay.appendChild(room);
    }
}

export { displayRooms };
