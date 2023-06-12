import {  userTotal } from './scripts.js'
const renderTotalPrice = (currentCustomer) => {
  userTotal.innerText = currentCustomer.totalPrice
}

const renderBookedRooms = (array, element) => {
  element.innerHTML = ''
  array.forEach((room) => {
    element.innerHTML += `<article class="bookingcard" id="${room.id}">
   Date Booked: ${room.dateBooked} <br> Room Type: ${room.roomType} <br> room number : ${room.roomNumber} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
    </article>`
  })
}

const renderRoomsToBook = (array, element) => {
  element.innerHTML = ''
  array.forEach((room) => {
    element.innerHTML += `<article class="booknowcard" id="${room.id}">
    <br> Room Type: ${room.roomType} <br> room number : ${room.number} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
   <input type="button" id="booknow" value="book now"> </article>`
  })
}
function showDomElement(element) {
  element.classList.remove("hidden");
}
    
function hideDomElement(element) {
  element.classList.add("hidden");
 
}

export { renderTotalPrice, renderBookedRooms, showDomElement, hideDomElement, renderRoomsToBook }