import { expect } from 'chai';
import { filterAlreadyBookedRooms, filterAvailableRoomsByDate, createDisplayingObjectForDate, filterByType } from '../src/filter-functions'
import { bookingData, customerData, roomData} from './sampleData'


describe('filterAlreadyBookedRooms', () => {
  it('should be a function', ()=> {
    expect(filterAlreadyBookedRooms).to.be.a('function')
  })

  it('should return any booked rooms for the current customer', () => {
    const currentCustomer = customerData[12]
    console.log(currentCustomer)
    const bookedrooms = filterAlreadyBookedRooms(currentCustomer, bookingData, roomData);
    const currentCustomer2 = customerData[8]
    console.log('bookedrooms', bookedrooms)
    
    const bookedrooms2 = filterAlreadyBookedRooms(currentCustomer2, bookingData, roomData);
    console.log('bookedrooms2', bookedrooms2)
    expect(bookedrooms).to.deep.equal([
      {
        dateBooked: '2022/01/10',
        roomNumber: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09,
        id: '5fwrgu4i7k55hl6t6'
      },
      {
        dateBooked: '2022/01/22',
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
        dateBooked: '2022/04/22',
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
    const dateValue = '2022/02/26'
    const filteredDates = filterAvailableRoomsByDate(dateValue)
    expect(filteredDates).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 9,
        date: '2022/04/22',
        roomNumber: 15
      },
      {
        id: '5fwrgu4i7k55hl6t9',
        userID: 38,
        date: '2023/12/14',
        roomNumber: 14
      },
      {
        id: '5fwrgu4i7k55hl6tc',
        userID: 22,
        date: '2023/11/30',
        roomNumber: 13
      }
    ])
  })

})

describe('createDisplayingObjectForDate', () => {
  it('should be a function', () => {
    expect(createDisplayingObjectForDate).to.a('function')
  })
  it('should return array of objects', () => {
    const array = createDisplayingObjectForDate("2021/11/30", roomData)
    console.log(array)
    expect(array).to.be.deep.equal([
      {
        roomNumber: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38,
        id: '5fwrgu4i7k55hl6tf'
      },
      {
        roomNumber: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17,
        id: '5fwrgu4i7k55hl6tb'
      },
      {
        roomNumber: 7,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 231.46,
        id: '5fwrgu4i7k55hl6t7'
      },
      {
        roomNumber: 8,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 261.26,
        id: '5fwrgu4i7k55hl6te'
      },
      {
        roomNumber: 9,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 200.39,
        id: '5fwrgu4i7k55hl6ta'
      },
      {
        roomNumber: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.24,
        id: '5fwrgu4i7k55hl6ti'
      },
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
        roomNumber: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09,
        id: '5fwrgu4i7k55hl6t8'
      },
      {
        roomNumber: 13,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 423.92,
        id: '5fwrgu4i7k55hl6tc'
      },
      {
        roomNumber: 14,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 457.88,
        id: '5fwrgu4i7k55hl6t9'
      },
      {
        roomNumber: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56,
        id: '5fwrgu4i7k55hl6sz'
      },
      {
        roomNumber: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56,
        id: '5fwrgu4i7k55hl6th'
      },
      {
        roomNumber: 17,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 328.15,
        id: '5fwrgu4i7k55hl6tg'
      },
      {
        roomNumber: 20,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 343.95,
        id: '5fwrgu4i7k55hl6td'
      }
    ]);
  });

  describe('filterAvailableRoomsByDate', () => {
    it('should be a function', () => {
      expect(filterAvailableRoomsByDate).to.be.a('function')
    })
    it.only('should return rooms based on selected roomType', () => {
      const filteredDates = createDisplayingObjectForDate("2021/11/30", roomData);
      const arrayByType = filterByType(filteredDates,"suite")
      console.log("fillll" ,filteredDates)
      const arrayByType2 = filterByType(filteredDates,"single room")
      console.log("onlu suite2", arrayByType)
      expect(arrayByType).to.deep.equal([  {
        roomNumber: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38,
        id: '5fwrgu4i7k55hl6tf'
      }])
      expect(arrayByType2).to.deep.equal( [{
        roomNumber: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17,
        id: '5fwrgu4i7k55hl6tb'
      },
      {
        roomNumber: 7,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 231.46,
        id: '5fwrgu4i7k55hl6t7'
      },
      {
        roomNumber: 9,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 200.39,
        id: '5fwrgu4i7k55hl6ta'
      },
      {
        roomNumber: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.24,
        id: '5fwrgu4i7k55hl6ti'
      },
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
        roomNumber: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09,
        id: '5fwrgu4i7k55hl6t8'
      },
      {
        roomNumber: 13,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 423.92,
        id: '5fwrgu4i7k55hl6tc'
      }
    ])
    })
  });
});