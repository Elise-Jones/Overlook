import{ customerData, bookingdata, roomData } from './scripts.js'
const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => errorHandling(err));
};

const assignPromises = () => {
 return Promise.all([fetchAPI('customers'), fetchAPI('bookings'), fetchAPI('rooms')])
}

const errorHandling = (err) => {
  alert(`${err.name}: ${err.message}!\nOverlook failed to obtain data from the server.`);
};

const postAPI = (customer) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(customer),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(json => console.log(json.message))
  .then(data => {
    if(data.message.includes('already')) {
      throw new Error('Room already booked!');
    }
  })
  .catch((err) => alert(err))
}


export { fetchAPI, postAPI, assignPromises }