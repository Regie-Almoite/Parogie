import { displayDepartureMonths } from "./roomsJsExports/displayDepartureMonths.js";
import { displayArrivalMonths } from "./roomsJsExports/displayArrivalMonths.js";
import { displayArrivalDates } from "./roomsJsExports/displayArrivalDates.js";
import { displayDepartureDates } from "./roomsJsExports/displayDepartureDates.js";
import { displayGuestCount } from "./roomsJsExports/displayGuestCount.js";
import { displayRooms } from "./roomsJsExports/displayRooms.js";
import { bookNow } from "./roomsJsExports/bookNow.js";

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

displayArrivalMonths(monthList);
displayArrivalDates(monthList);
displayDepartureMonths(monthList);
displayDepartureDates(monthList);
displayGuestCount();

let roomList = [
    {
        image: "./images/roomImg.jpg",
        roomName: "Room1",
        roomId: 0,
        capacity: 4,
        // availability: "available",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room2",
        roomId: 1,
        capacity: 4,
        // availability: "unavailable",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room3",
        roomId: 2,
        capacity: 5,
        // availability: "unavailable",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room4",
        roomId: 3,
        capacity: 5,
        // availability: "unavailable",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room5",
        roomId: 4,
        capacity: 5,
        // availability: "available",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room6",
        roomId: 5,
        capacity: 2,
        // availability: "available",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room7",
        roomId: 6,
        capacity: 3,
        // availability: "available",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
    {
        image: "./images/roomImg.jpg",
        roomName: "Room8",
        roomId: 7,
        capacity: 1,
        // availability: "available",
        amenities: [
            "Beds",
            "Telephone",
            "Air conditioned",
            "Wireless Internet",
        ],
    },
];

displayRooms(roomList);
bookNow(roomList);
