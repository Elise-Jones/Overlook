import { bookingData } from "../test/sampleData";

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
  const ma = dateValue.split('-').join('/')

  const avail = bookingData.filter((room) => {
    console.log(bookingData.length)
    return room.date !== ma && ma < room.date
   })
   return avail
}

const createDisplayingObjectForDate = ( dateValue, roomData) => {
  const only = filterAvailableRoomsByDate(dateValue)
  return roomData.reduce((acc, roomInfo) => {
    only.forEach((r) => {
      if(roomInfo.number === r.roomNumber){
        acc.push({
          roomNumber: roomInfo.number,
          roomType: roomInfo.roomType,
          bidet: roomInfo.bidet,
          bedSize: roomInfo.bedSize,
          numBeds: roomInfo.numBeds,
          costPerNight: roomInfo.costPerNight,
          id: r.id
        })
      }
    })
    return acc
  }, [])
}


const filterByType = (dateMatchedArray, roomTypeValue) => {
  return dateMatchedArray.filter((room) => {
   return room.roomType.split(' ').join('*') === roomTypeValue.split(' ').join('*')
  })
}
  export { filterAlreadyBookedRooms, filterAvailableRoomsByDate, createDisplayingObjectForDate, filterByType}