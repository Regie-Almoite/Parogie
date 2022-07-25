import { displayDepartureMonths } from "./roomsJsExports/displayDepartureMonths.js";
import { displayArrivalMonths } from "./roomsJsExports/displayArrivalMonths.js";
import { displayDepartureDays } from "./roomsJsExports/displayDepartureDays.js";
import { displayArrivalDays } from "./roomsJsExports/displayArrivalDays.js";
// import { displayArrivalDates } from "./roomsJsExports/displayArrivalDates.js";
// import { displayDepartureDates } from "./roomsJsExports/displayDepartureDates.js";
import { displayGuestCount } from "./roomsJsExports/displayGuestCount.js";
import { displayRooms } from "./roomsJsExports/displayRooms.js";
import { bookNow } from "./roomsJsExports/bookNow.js";

localStorage.setItem("error", "");
let monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let roomList = [
    {
        image: "./images/roomImg.jpg",
        roomName: "Room1",
        roomId: 0,
        capacity: 4,
        price: 400,
        // availability: "available",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room2",
        roomId: 1,
        capacity: 4,
        price: 400,
        // availability: "unavailable",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room3",
        roomId: 2,
        capacity: 5,
        price: 500,
        // availability: "unavailable",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room4",
        roomId: 3,
        capacity: 5,
        price: 500,
        // availability: "unavailable",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room5",
        roomId: 4,
        capacity: 5,
        price: 500,
        // availability: "available",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room6",
        roomId: 5,
        capacity: 2,
        price: 200,
        // availability: "available",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room7",
        roomId: 6,
        capacity: 3,
        price: 300,
        // availability: "available",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room8",
        roomId: 7,
        capacity: 1,
        price: 100,
        // availability: "available",
        roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus inventore voluptates eveniet veniam eum velit obcaecati, impedit facilis quo enim a! Voluptatem consequatur excepturi illo delectus qui sapiente id.",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
        isReserved: false,
    },
];

displayArrivalMonths(monthList);
displayDepartureMonths(monthList);
displayArrivalDays(monthList, "January");
displayDepartureDays(monthList, "January");
displayGuestCount(roomList);

let allReservations = JSON.parse(localStorage.getItem("allReservation"));
if (allReservations == null) allReservations = [];

let updatedRoomList = roomList.map((room) => {
    if (allReservations !== []) {
        for (let x in allReservations) {
            console.log(
                allReservations[x].bookData.roomDetails.roomId +
                    " : roomlistRoom: " +
                    room.roomId
            );
            if (
                allReservations[x].bookData.roomDetails.roomId === room.roomId
            ) {
                room.isReserved = true;
            }
        }
        return room;
    }
});

let newListToDisplay = updatedRoomList.filter((room) => {
    return room.isReserved !== true;
});

console.log(newListToDisplay);

displayRooms(newListToDisplay);
bookNow(roomList);
