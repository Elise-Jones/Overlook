// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getRandomCustomer } from './customer.js';
import { assignPromises, postAPI } from './apiCalls'
import { calculatePrice } from './calculate-price';
import { renderTotalPrice, renderBookedRooms, showDomElement, hideDomElement, renderRoomsToBook } from './domUpdates';
import { filterAlreadyBookedRooms, showAvailableRooms, createDisplayingObjectForDate, filterByType } from './filter-functions'


//GLOBAL VARIABLE
let currentCustomer;
let bookingdata;
let customerData;
let roomData;
let dateMatchedArray;

//QUERY SELECTORS
const userTotal = document.querySelector('.usertotal');
const bookingContainer = document.querySelector(".booking-container")
const calendarSubmitButton = document.querySelector('.calendarsubmitbutton')
const startDate = document.querySelector(".startdate")
const byDateContainer = document.querySelector(".bydate")
const datePicker = document.getElementById("datepicker")
const roomTypeButtonHolder = document.querySelector(".buttonholder")
const form = document.querySelector(".buttonselection")
const former = document.getElementById('myform');
const submitButton = document.getElementById('submitbutton');
const booknowcard = document.querySelector('.booknowcard')

const start = () => {
  assignPromises().then((data) => {
    customerData = data[0].customers;
    bookingdata = data[1].bookings
    roomData = data[2].rooms
    currentCustomer = getRandomCustomer(customerData);
    currentCustomer.totalPrice = calculatePrice(currentCustomer, bookingdata, roomData)
    const customerBookings = filterAlreadyBookedRooms(currentCustomer, bookingdata, roomData)
    renderTotalPrice(currentCustomer) 
    renderBookedRooms(customerBookings, bookingContainer)
    datePicker.min= new Date().toISOString().split("T")[0];
  });
};

//EVENT LISTENERS
window.addEventListener('load', start)

datePicker.addEventListener('input', () => {
  calendarSubmitButton.disabled = false;
});

calendarSubmitButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(dateMatchedArray)
  dateMatchedArray = showAvailableRooms(startDate.value, roomData, bookingdata)
  hideDomElement(bookingContainer)
  showDomElement(byDateContainer)
  showDomElement(form)
  renderRoomsToBook(dateMatchedArray, byDateContainer)
  })
  const getBack = () => {
    assignPromises().then((data) => {
     customerData = data[0].customers;
     bookingdata = data[1].bookings
     roomData = data[2].rooms
  })
  }

roomTypeButtonHolder.addEventListener('click', (e) => {
   let roomTypeArray = filterByType(dateMatchedArray, e.target.value)
   showDomElement(byDateContainer)
   renderRoomsToBook(roomTypeArray, byDateContainer)
  })

byDateContainer.addEventListener('click', (e) => {
  console.log('startdate', startDate.value)
  let roomnumber;
  if(e.target.id === "booknow"){
    roomnumber = e.target.parentNode.id
    console.log(typeof roomnumber)
    postAPI({userID: currentCustomer.id, date: startDate.value.split('-').join('/'), roomNumber: parseInt(roomnumber)})
    .then(() => {getBack()
      console.log("boookiinngg", bookingdata)
    })
    .catch((error) => {console.log(error)
    })
    
    
  } 
  
  

})


export { userTotal, bookingContainer }