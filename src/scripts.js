// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getRandomCustomer } from './customer.js';
import { fetchAPI } from './apiCalls'
import { calculatePrice } from './calculate-price';
import { renderTotalPrice, renderBookedRooms, showDomElement, hideDomElement } from './domUpdates';
import { filterAlreadyBookedRooms, filterAvailableRoomsByDate, createNewobj } from './filter-functions'


console.log('This is the JavaScript entry file - your code begins here.');
//GLOBAL VARIABLE
// let currentCustomer;
// let bookingdata
// let customerData;
// let roomData;





//QUERY SELECTORS
const userTotal = document.querySelector('.usertotal');
const bookingContainer = document.querySelector(".booking-container")
const calendarSubmitButton = document.querySelector('.calendarsubmitbutton')
const startDate = document.querySelector(".startdate")
const byDateContainer = document.querySelector(".bydate")


// const start = () => {
//   Promise.all([fetchAPI('customers'), fetchAPI('bookings'), fetchAPI('rooms')]).then((data) => {
//     customerData = data[0].customers;
//     console.log('customerData', customerData)
//     bookingdata = data[1].bookings
//     roomData = data[2].rooms
//     console.log('roomdaata', roomData)
//     currentCustomer = getRandomCustomer(customerData);
//     currentCustomer.totalPrice = calculatePrice(currentCustomer, bookingdata, roomData)
//     const customerBookings = filterAlreadyBookedRooms(currentCustomer, bookingdata, roomData)
//     renderTotalPrice(currentCustomer) 
//     renderBookedRooms(customerBookings, bookingContainer)
//   });
 
// };

//EVENT LISTENERS
window.addEventListener('load', start);
calendarSubmitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const availableRoomsByDate = filterAvailableRoomsByDate(startDate.value, roomData)
  // const cre = createNewobj(startDate.value,  availableRoomsByDate)
  // console.log('availablerooms bydate', availableRoomsByDate)
  
  hideDomElement(bookingContainer)
  showDomElement(byDateContainer)
  // renderBookedRooms(cre, byDateContainer)
  })
export { userTotal, bookingContainer }