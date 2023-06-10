// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getRandomCustomer } from './customer.js';
import { fetchAPI } from './apiCalls'
import { calculatePrice } from './calculate-price';
import { renderTotalPrice, renderBookedRooms } from './domUpdates';
import { filterAlreadyBookedRooms } from './filter-functions'


console.log('This is the JavaScript entry file - your code begins here.');
//GLOBAL VARIABLE
let currentCustomer;
let bookingData
let customerData;
let roomData;

//QUERY SELECTORS
const userTotal = document.querySelector('.usertotal');
const bookingContainer = document.querySelector(".booking-container")
console.log(bookingContainer)

const start = () => {
  Promise.all([fetchAPI('customers'), fetchAPI('bookings'), fetchAPI('rooms')]).then((data) => {
    customerData = data[0].customers;
    console.log('customerData', customerData)
    bookingData = data[1].bookings
    roomData = data[2].rooms
    console.log('roomdaata', roomData)
    currentCustomer = getRandomCustomer(customerData);
    currentCustomer.totalPrice = calculatePrice(currentCustomer, bookingData, roomData)
    const customerBookings = filterAlreadyBookedRooms(currentCustomer, bookingData, roomData)
    renderTotalPrice(currentCustomer)
    renderBookedRooms(customerBookings)
  });
 
};

//EVENT LISTENERS
window.addEventListener('load', start);

export { userTotal, bookingContainer }