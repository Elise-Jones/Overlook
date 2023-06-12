import { bookingTitle } from './scripts.js'
const renderMessage = (element, message) => {
  element.innerText = message;
};

const renderBookedRooms = (array, element) => {
  element.innerHTML = "";
  array.forEach((room) => {
    element.innerHTML += `<article class="bookingcard" id="${room.roomNumber}">
   Date Booked: ${room.dateBooked} <br> Room Type: ${room.roomType} <br> room number : ${room.roomNumber} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
    </article>`;
  });
};

const renderRoomsToBook = (array, element) => {
  element.innerHTML = "";
  array.forEach((room) => {
    element.innerHTML += `<article class="booknowcard" id="${room.number}">
    <br> Room Type: ${room.roomType} <br> room number : ${room.number} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
   <input type="button" id="booknow" value="book now"> </article>`;
  });
};


function showDomElement(element) {
  element.classList.remove("hidden");
}

function hideDomElement(element) {
  element.classList.add("hidden");
}

export {
  renderBookedRooms,
  showDomElement,
  hideDomElement,
  renderRoomsToBook,
  renderMessage,
};
