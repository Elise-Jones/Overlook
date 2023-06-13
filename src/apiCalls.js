const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Server error");
      }
      return response.json();
    })
    .catch((err) => {
      console.log("Error:", err);
      alert(err);
    });
};

const assignPromises = (id) => {
  return Promise.all([
    fetchAPI("customers"),
    fetchAPI("bookings"),
    fetchAPI("rooms"),
    getSingleCustomer(id),
  ]);
};

const getSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => errorHandling(err));
};

const postAPI = (customer) => {
  return fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert(
        `You booked room number ${data.newBooking.roomNumber} on ${data.newBooking.date}`
      );
    })
    .catch((err) => alert(err));
};

export { fetchAPI, postAPI, assignPromises, getSingleCustomer };
