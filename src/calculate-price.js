const filterAlreadyBookedRooms = (currentUser, bookingData) => {
  const booked = bookingData.filter((room) => {
    return room.userID === currentUser.id;
  });
  return booked;
};

const calculatePrice = (currentUser, bookingData, roomData) => {
  const array = filterAlreadyBookedRooms(currentUser, bookingData);
  const getTotal = roomData.reduce((total, room) => {
    array.forEach((alreadybookedroom) => {
      if (room.number === alreadybookedroom.roomNumber) {
        total += room.costPerNight;
      }
    });
    return total
  }, 0);
  return `$${getTotal.toFixed(2)}` 
};

export { calculatePrice };
