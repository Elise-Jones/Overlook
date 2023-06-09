import { expect } from 'chai';
import { calculatePrice } from '../src/calculate-price';
// import { filterAlreadyBookedRooms} from '../src/filter-functions';
import { bookingData, customerData, roomData} from './sampleData'

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