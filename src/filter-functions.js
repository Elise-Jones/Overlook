const filterAlreadyBookedRooms = (currentCustomer, bookingData, roomData) => {
  const booked = bookingData.reduce((array, bookedroom) => {
    roomData.forEach((roomInfo) => {
      if (
        bookedroom.userID === currentCustomer.id &&
        roomInfo.number === bookedroom.roomNumber
      ) {
        array.push({
          dateBooked: bookedroom.date,
          roomNumber: roomInfo.number,
          roomType: roomInfo.roomType,
          bidet: roomInfo.bidet,
          bedSize: roomInfo.bedSize,
          numBeds: roomInfo.numBeds,
          costPerNight: roomInfo.costPerNight,
          id: bookedroom.id
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

const filterAvailableRoomsByDate = (dateValue) => {
  const todaysDate = new Date().toJSON().slice(0, 10).split('-').join('/')
  const avail = bookings.filter((room) => {
    return room.date !== dateValue && todaysDate < room.date
   })
}
  export { filterAlreadyBookedRooms, filterAvailableRoomsByDate }