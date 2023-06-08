import { expect } from 'chai';
import { filterAlreadyBookedRooms, calculatePrice } from '../src/calculate-price';
import { bookingData, customerData, roomData} from './sampleData'


describe('filterAlreadyBookedRooms', () => {
  it('should be a function', ()=> {
    expect(filterAlreadyBookedRooms).to.be.a('function')
  })

  it('should return any booked rooms for the current customer', () => {
    const currentCustomer = customerData[12]
    const bookedrooms = filterAlreadyBookedRooms(currentCustomer, bookingData);
    const currentCustomer2 = customerData[0]
    const bookedrooms2 = filterAlreadyBookedRooms(currentCustomer2, bookingData);
    console.log(bookedrooms2)
    expect(bookedrooms).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6t6',
        userID: 13,
        date: '2022/01/10',
        roomNumber: 12
      },
      {
        id: '5fwrgu4i7k55hl6ti',
        userID: 13,
        date: '2022/01/22',
        roomNumber: 11
      }
    ]);
    expect(bookedrooms2).to.deep.equal([{
      id: '5fwrgu4i7k55hl6t8',
      userID: 1,
      date: '2022/02/05',
      roomNumber: 12
    }]) 

});
  it('should return a message if no bookings were found', () => {
    const currentCustomer3 = customerData[1];
    const bookedrooms3 = filterAlreadyBookedRooms(currentCustomer3, bookingData);
    expect(bookedrooms3).to.equal('You have no bookings yet!');
  });
});

describe('calculatePrice', () => {
  it('should be a function', () => {
    expect(calculatePrice).to.be.a('function');
  });

  it('should calculate the total cost of how much the customer has spent', () => {
    const currentCustomer = customerData[12];
    const customerCost1 = calculatePrice(currentCustomer, bookingData, roomData);
    const currentCustomer2 = customerData[0];
    const customerCost2 = calculatePrice(currentCustomer2, bookingData, roomData);
    expect(customerCost1).to.equal('$379.33');
    expect(customerCost2).to.equal('$172.09');
  });

  it('should notify customer if they have not spent any money', () => {
    const currentCustomer = customerData[1];
    const customerCost1 = calculatePrice(currentCustomer, bookingData, roomData);
    expect(customerCost1).to.equal('You have not booked with us yet!');
  });
});