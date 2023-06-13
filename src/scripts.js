
import "./css/styles.css";
import { assignPromises, postAPI } from "./apiCalls";
import { calculatePrice } from "./calculate-price";
import {
  renderBookedRooms,
  showDomElement,
  hideDomElement,
  renderRoomsToBook,
  renderMessage,
} from "./domUpdates";
import {
  filterAlreadyBookedRooms,
  findAvailableRooms,
  filterByType,
} from "./filter-functions";

//GLOBAL VARIABLE
let customerData;
let currentCustomer;
let bookingdata;
let roomData;
let dateMatchedArray;

//QUERY SELECTORS
const userTotal = document.querySelector(".usertotal");
const bookingContainer = document.querySelector(".booking-container");
const calendarSubmitButton = document.querySelector(".calendarsubmitbutton");
const startDate = document.querySelector(".startdate");
const byDateContainer = document.querySelector(".bydate");
const datePicker = document.getElementById("datepicker");
const roomTypeButtonHolder = document.querySelector(".buttonholder");
const form = document.querySelector(".buttonselection");
const customerWelcome = document.querySelector("h1");
const bookingTitle = document.querySelector("h3");
const loginForm = document.getElementById("loginform");
const passwordEntry = document.querySelector("#username");
const calendarNavContainer = document.querySelector(".calendarnav");
const userDashboard = document.querySelector(".userdashboard");
const loginContainer = document.querySelector(".login-container");

//EVENT LISTENERS
datePicker.addEventListener("input", () => {
  calendarSubmitButton.disabled = false;
});

calendarSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dateMatchedArray = findAvailableRooms(startDate.value, roomData, bookingdata);
  if (dateMatchedArray.length === 0) {
    alert("none for you");
  }
  hideDomElement(bookingContainer);
  showDomElement(byDateContainer);
  showDomElement(form);
  renderRoomsToBook(dateMatchedArray, byDateContainer, bookingTitle);
  renderMessage(
    bookingTitle,
    `All rooms available on ${startDate.value.split("-").join("/")}`
  );
});

const getID = (pw) => {
  return pw.split("").slice(-2).join("");
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = getID(passwordEntry.value);
  start(id);
});

roomTypeButtonHolder.addEventListener("click", (e) => {
  let roomTypeArray = filterByType(dateMatchedArray, e.target.value);
  if (roomTypeArray.length === 0) {
    bookingTitle.innerText = `We apologize, there are no available ${e.target.value}'s that day`;
    byDateContainer.innerHTML = "";
  } else {
    showDomElement(byDateContainer);
    renderRoomsToBook(roomTypeArray, byDateContainer, bookingTitle, e);
    renderMessage(
      bookingTitle,
      `${e.target.value}'s available on ${startDate.value.split("-").join("/")}`
    );
  }
});

byDateContainer.addEventListener("click", (e) => {
  let roomnumber;
  if (e.target.id === "booknow") {
    roomnumber = e.target.parentNode.id;
    e.target.disabled = true;
    e.target.value = "Booked!";
    postAPI({
      userID: currentCustomer.id,
      date: startDate.value.split("-").join("/"),
      roomNumber: parseInt(roomnumber),
    })
  }
});

const start = (id) => {
  assignPromises(id).then((data) => {
    customerData = data[0].customers;
    bookingdata = data[1].bookings;
    roomData = data[2].rooms;
    currentCustomer = data[3];
    currentCustomer.totalPrice = calculatePrice(
      currentCustomer,
      bookingdata,
      roomData
    );
    const customerBookings = filterAlreadyBookedRooms(
      currentCustomer,
      bookingdata,
      roomData
    );
    hideDomElement(loginContainer);
    showDomElement(calendarNavContainer);
    showDomElement(bookingTitle);
    showDomElement(userDashboard);
    showDomElement(bookingContainer);
    renderMessage(userTotal, `Your total spent: ${currentCustomer.totalPrice}`);
    renderMessage(customerWelcome, `Welcome ${currentCustomer.name}`);
    renderBookedRooms(customerBookings, bookingContainer);
    datePicker.min = new Date().toISOString().split("T")[0];
  });
};

export { userTotal, bookingContainer, customerWelcome, startDate };
