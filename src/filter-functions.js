const filterAlreadyBookedRooms = (currentCustomer, bookingData, roomData) => {
  const booked = bookingData.reduce((array, bookedroom) => {
    roomData.forEach((roomInfo) => {
      if (
        bookedroom.userID === currentCustomer.id &&
        roomInfo.number === bookedroom.roomNumber
      ) {
        array.push({
          roomNumber: roomInfo.number,
          costPerNight: roomInfo.costPerNight,
          roomType: roomInfo.roomType,
          bidet: roomInfo.bidet,
          bedSize: roomInfo.bedSize,
          numBeds: roomInfo.numBeds
        });
      }
    });
    return array;
  }, []);

  if (booked.length === 0) {
    return "You have no bookings yet!";
  }
  return booked
};


const filterAvailableRoomsByDate = (dateValue, bookingData) => {
  const avail = bookingData.filter((room) => {
      return room.date !== dateValue
     })
    return avail
  }

  export { filterAlreadyBookedRooms, filterAvailableRoomsByDate }