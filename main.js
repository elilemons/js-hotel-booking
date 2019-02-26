"use strict"; 

class HotelRoom {
    constructor(roomNumber, roomType) {
        this.roomNumber = roomNumber;
        this.bookedDate = undefined;
        this.roomType = roomType;
    }
}

class Hotel {
    constructor(name, penthouseAvailable, numOfRoomsAvailable, roomTypes) {
        this.name = name;
        this.penthouseAvailable = new Array(penthouseAvailable);
        this.numOfRoomsAvailable = numOfRoomsAvailable;
        this.rooms = new Array(numOfRoomsAvailable);
        this.roomTypes = roomTypes;

        for (let i = 0; i < this.rooms.length; i++) {
            this.rooms[i] = new HotelRoom(i + 1);
        }
    }

    setupRoomsAvailable() {
        let roomsAvailableDiv = document.getElementById('rooms-available');
        roomsAvailableDiv.innerText = this.numOfRoomsAvailable;
    }

    setUpRoomTypes() {
        let roomTypesListItems = document.getElementById('room-types');
        let roomTypesDropdown = document.getElementById('room-type-dropdown');
    
        for (let i = 0; i < this.roomTypes.length; i++) {
            let roomTypesListItem = document.createElement('li');
            let roomTypesDropdownOption = new Option(this.roomTypes[i], i);
    
            roomTypesListItem.innerText = this.roomTypes[i];
            roomTypesListItem.classList.add('list-item');
            roomTypesListItems.appendChild(roomTypesListItem);
    
            roomTypesDropdown.options[i] = roomTypesDropdownOption;
        }
    }

    bookHotelRoom() {
        if (this.numOfRoomsAvailable === 0) {
            console.error('There are no rooms available');
            return;
        }

        this.numOfRoomsAvailable--;

        let userInputDate = document.getElementById('book-date');
        let hotelRoom = this.rooms[this.numOfRoomsAvailable];        
        let roomTypes = document.getElementById('room-type-dropdown');
        hotelRoom.roomType = roomTypes[roomTypes.selectedIndex].innerText;
        hotelRoom.bookedDate = userInputDate.value;
        this.setupRoomsAvailable();
    }
}

let roomTypes = [
    "Twin",
    "Double",
    "King",
    "Suite",
    "Penthouse",
    "Arcade Dungeon",
    "Conference Room"
]

// setUpRoomTypes(roomTypes);

let jwMarriot = new Hotel('JW Marriot', 15, 150, roomTypes);
jwMarriot.setUpRoomTypes();
jwMarriot.setupRoomsAvailable();
console.log(jwMarriot);