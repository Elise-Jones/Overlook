const filterAlreadyBookedRooms = (currentCustomer, bookingData) => {
  const booked = bookingData.filter((room) => {
    return room.userID === currentCustomer.id;
  });

  if (booked.length === 0) {
    return "You have no bookings yet!";
  }
  return booked;
};

const calculatePrice = (currentCustomer, bookingData, roomData) => {
  const array = filterAlreadyBookedRooms(currentCustomer, bookingData);
  if (array === "You have no bookings yet!") {
    return "You have not booked with us yet!";
  }
  const getTotal = roomData.reduce((total, room) => {
    array.forEach((alreadybookedroom) => {
      if (room.number === alreadybookedroom.roomNumber) {
        total += room.costPerNight;
      }
    });
    return total;
  }, 0);
  return `$${getTotal.toFixed(2)}`;
};

export { filterAlreadyBookedRooms, calculatePrice };
