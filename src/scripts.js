// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getRandomUser } from './user';
import { fetchAPI } from './apiCalls'
import { calculatePrice } from './calculate-price';
import { renderTotalPrice } from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');
//GLOBAL VARIABLE
let currentUser;
let bookingData
let userData;
let roomData;

//QUERY SELECTORS
const userTotal = document.querySelector('.usertotal')
console.log(userTotal.innerText)

const start = () => {
  Promise.all([fetchAPI('customers'), fetchAPI('bookings'), fetchAPI('rooms')]).then((data) => {
    userData = data[0].customers;
    console.log('userdata', userData)
    bookingData = data[1].bookings
    roomData = data[2].rooms
    console.log('roomdaata', roomData)
    currentUser = getRandomUser(userData);
    currentUser.totalPrice = calculatePrice(currentUser, bookingData, roomData)
    renderTotalPrice(currentUser)
  });
 
};

//EVENT LISTENERS
window.addEventListener('load', start);

export { userTotal }