import { expect } from 'chai';
import { getRandomCustomer, getRandomIndex } from '../src/customer'
import { customerData } from './sampleData'

describe('getRandomindex', () => {
  it('should be a function', () => {
    expect(getRandomIndex).to.be.a('function');
  });

  it('should return a number', () => {
    expect(getRandomIndex(customerData.length)).to.be.a('number');
  });

  it('should return undefined if user info is not passed in', () => {
    expect(getRandomIndex()).to.be.NaN
  })
});

describe('getRandomCustomer', () => {
  it('should be a function', () => {
    expect(getRandomCustomer).to.be.a('function');
  });
  
  it('should return a user object', () => {
    expect(getRandomCustomer(customerData)).to.have.key('id', 'name');
  });

  it('should return undefined if no user data is passed in', () => {
    expect(getRandomCustomer()).to.equal('user data not found');
  });
});
