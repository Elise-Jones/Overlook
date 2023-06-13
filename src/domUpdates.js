import { startDate} from "./scripts.js";

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
  let todaysDate = new Date().toJSON().slice(0, 10);
  if (todaysDate > startDate.value) {
    alert("Choose a future date");
    element.innerHTML = "";
   hideDomElement(bookingTitle)
  } else if ( todaysDate < startDate.value) {
    element.innerHTML = "";
    showDomElement(bookingTitle)
    bookingTitle.innerText = `All rooms available on ${startDate.value.split("-").join("/")}`
    array.forEach((room) => {
      element.innerHTML += `<article class="booknowcard" id="${room.number}">
    <br> Room Type: ${room.roomType} <br> Room Number : ${room.number} <br> Number of Beds: $${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
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
