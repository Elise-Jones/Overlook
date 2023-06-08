import { expect } from 'chai';
import { filterAlreadyBookedRooms, calculatePrice } from '../src/calculate-price';
import { bookingData} from './sampleData'


describe('filterAlreadyBookedRooms', () => {
  it('should be a function', ()=> {
    expect(filterAlreadyBookedRooms).to.be.a('function')
  })
  
  

  it('should return an booked rooms for the current customer', () => {
    const currentCustomer = {
      id: 13,
      name: "Elise",
    };
    const bookedrooms = filterAlreadyBookedRooms(currentCustomer, bookingData);
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
  });
  
  it('should return a message if no rooms were found', () => {
    const currentCustomer = {
      id: 500,
      name: "Bob",
    };
    const bookedrooms = filterAlreadyBookedRooms(currentCustomer, bookingData);
  })
});