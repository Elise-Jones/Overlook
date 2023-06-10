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
    const currentCustomer2 = customerData[8]
    const bookedrooms2 = filterAlreadyBookedRooms(currentCustomer2, bookingData, roomData);
    expect(bookedrooms).to.deep.equal([
      {
        roomNumber: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09,
        id: '5fwrgu4i7k55hl6t6'
      },
      {
        roomNumber: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.24,
        id: '5fwrgu4i7k55hl6ti'
      }
    ]);
    expect(bookedrooms2).to.deep.equal([
      {
        roomNumber: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56,
        id: '5fwrgu4i7k55hl6sz'
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
  it('based on customers date preference it should return only available rooms in the future', () => {
    expect()
  })
})
