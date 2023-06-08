// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getRandomCustomer } from './user';
import { fetchAPI } from './apiCalls'
import { calculatePrice } from './calculate-price';
import { renderTotalPrice } from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');
//GLOBAL VARIABLE
// let currentCustomer;
// let bookingData
// let customerData;
// let roomData;

//QUERY SELECTORS
const userTotal = document.querySelector('.usertotal')
console.log(userTotal.innerText)

const start = () => {
  Promise.all([fetchAPI('customers'), fetchAPI('bookings'), fetchAPI('rooms')]).then((data) => {
    customerData = data[0].customers;
    console.log('customerData', customerData)
    bookingData = data[1].bookings
    roomData = data[2].rooms
    console.log('roomdaata', roomData)
    currentCustomer = getRandomCustomer(customerData);
    currentCustomer.totalPrice = calculatePrice(currentCustomer, bookingData, roomData)
    renderTotalPrice(currentCustomer)
  });
 
};

//EVENT LISTENERS
window.addEventListener('load', start);

export { userTotal }