import { startDate } from "./scripts.js";

const renderMessage = (element, message) => {
  element.innerText = message;
};

const renderBookedRooms = (array, element) => {
  element.innerHTML = "";
  array.forEach((room) => {
    element.innerHTML += `<article class="bookingcard" id="${room.roomNumber}">
   Date Booked: ${room.dateBooked} <br> Room Type: ${room.roomType} <br> Room Number : ${room.roomNumber} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: $${room.costPerNight}
    </article>`;
  });
};

const renderRoomsToBook = (array, element, bookingTitle) => {
  console.log(bookingTitle);
  let todaysDate = new Date().toJSON().slice(0, 10);
  if (todaysDate > startDate.value) {
    bookingTitle.innerText = "Choose a future date!";
    alert("Choose a future date");
    element.innerHTML = "";
  } else {
    renderMessage(
      bookingTitle,
      `All rooms available on ${startDate.value.split("-").join("/")}`
    );
    element.innerHTML = "";
    array.forEach((room) => {
      element.innerHTML += `<article class="booknowcard" id="${room.number}">
    <br> Room Type: ${room.roomType} <br> room number : ${room.number} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
   <input type="button" id="booknow" value="book now"> </article>`;
    });
  }
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
