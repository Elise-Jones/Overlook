import { expect } from 'chai';
import { filterAlreadyBookedRooms, filterAvailableRoomsByDate } from '../src/filter-functions'
import { bookingData, customerData, roomData} from './sampleData'


describe('filterAlreadyBookedRooms', () => {
  it('should be a function', ()=> {
    expect(filterAlreadyBookedRooms).to.be.a('function')
  })

  it('should return any booked rooms for the current customer', () => {
    const currentCustomer = customerData[12]
    const bookedrooms = filterAlreadyBookedRooms(currentCustomer, bookingData, roomData);
    const currentCustomer2 = customerData[0]
    const bookedrooms2 = filterAlreadyBookedRooms(currentCustomer2, bookingData, roomData);
    console.log('2', bookedrooms2)

    expect(bookedrooms).to.deep.equal([{
      roomNumber: 12,
      costPerNight: 172.09,
      roomType: 'single room',
      bidet: false,
      bedSize: 'twin'
    },
    {
      roomNumber: 11,
      costPerNight: 207.24,
      roomType: 'single room',
      bidet: true,
      bedSize: 'twin'
    }
  ]);
    expect(bookedrooms2).to.deep.equal([
      {
        roomNumber: 12,
        costPerNight: 172.09,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin'
      }
    ]) 

});
  it('should return a message if no bookings were found', () => {
    const currentCustomer3 = customerData[1];
    const bookedrooms3 = filterAlreadyBookedRooms(currentCustomer3, bookingData, roomData);
    expect(bookedrooms3).to.equal('You have no bookings yet!');
  });
});

describe('filterAvailableRoomsByDate', () => {
  it('should be a function', () => {
    expect(filterAvailableRoomsByDate).to.be.a('function')
  })
  it('based on customers date preference it should return only available rooms', () => {
    expect()
  })
})

//didn't sort the past bookings from the future