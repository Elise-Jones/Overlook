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


const findAvailableRooms = (selectedDate, rooms, bookings) => {
  
  const filteredRooms = bookings.filter((booking) => {
    return booking.date === selectedDate.split('-').join('/')
  });
  const unavailableRooms = filteredRooms.map((room) => {
    return room.roomNumber});
  const availableRooms = rooms.filter((room) => {
    return !unavailableRooms.includes(room.number)});
    
    
    if(availableRooms.length === 0){
      return `Sorry There are no available rooms that day.`
    }
  return availableRooms
}

const filterByType = (dateMatchedArray, roomTypeValue) => {
  return dateMatchedArray.filter((room) => {
   return room.roomType.split(' ').join('*') === roomTypeValue.split(' ').join('*')
  })
}
  export { filterAlreadyBookedRooms, findAvailableRooms, 
    filterByType}