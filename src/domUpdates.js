import { bookingContainer, userTotal } from './scripts.js'
const renderTotalPrice = (currentCustomer) => {
  userTotal.innerText = currentCustomer.totalPrice
}

const renderBookedRooms = (array, element) => {
  console.log('hello')
  array.forEach((room) => {
    element.innerHTML += `<article class="bookingcard" id="${room.id}">
   Date Booked: ${room.dateBooked} <br> Room Type: ${room.roomType} <br> room number : ${room.roomNumber} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
    </article>`
  })
}
function showDomElement(element) {
  element.classList.remove("hidden");
}
    
function hideDomElement(element) {
  element.classList.add("hidden");
 
}

export { renderTotalPrice, renderBookedRooms, showDomElement, hideDomElement}