import { filterAlreadyBookedRooms} from '../src/filter-functions';


const calculatePrice = (currentCustomer, bookingData, roomData) => {
  const array = filterAlreadyBookedRooms(
    currentCustomer,
    bookingData,
    roomData
  );
  if (array === "You have no bookings yet!") {
    return "You have not booked with us yet!";
  }
  const calctotal = array.reduce((acc, room) => {
    acc += room.costPerNight;
    return acc;
  }, 0);
  return `$${calctotal.toFixed(2)}`;
};

export { calculatePrice };
