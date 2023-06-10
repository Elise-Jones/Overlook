import { userTotal, bookingContainer } from './scripts.js'
const renderTotalPrice = (currentCustomer) => {
  userTotal.innerText = currentCustomer.totalPrice
}

const renderBookedRooms = (customerBookings) => {
  customerBookings.forEach((room) => {
    bookingContainer.innerHTML += `<article class="bookingcard" id="${room.id}">
   Date Booked: ${room.dateBooked} <br> Room Type: ${room.roomType} <br> room number : ${room.roomNumber} <br> Number of Beds: ${room.numBeds} <br> Cost Per Night: ${room.costPerNight}
    </article>`
  })
}

console.log('vava', 'lkjasdflkjsa')
export { renderTotalPrice, renderBookedRooms}