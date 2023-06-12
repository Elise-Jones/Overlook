import { expect } from "chai";
import {
  filterAlreadyBookedRooms,
  findAvailableRooms,
  filterByType,
} from "../src/filter-functions";
import { bookingData, customerData, roomData } from "./sampleData";

describe("filterAlreadyBookedRooms", () => {
  it("should be a function", () => {
    expect(filterAlreadyBookedRooms).to.be.a("function");
  });

  it("should return any booked rooms for the current customer", () => {
    const currentCustomer = customerData[12];
    const bookedrooms = filterAlreadyBookedRooms(
      currentCustomer,
      bookingData,
      roomData
    );
    const currentCustomer2 = customerData[8];

    const bookedrooms2 = filterAlreadyBookedRooms(
      currentCustomer2,
      bookingData,
      roomData
    );
    expect(bookedrooms).to.deep.equal([
      {
        dateBooked: "2022/01/10",
        roomNumber: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09,
        id: "5fwrgu4i7k55hl6t6",
      },
      {
        dateBooked: "2022/01/22",
        roomNumber: 11,
        roomType: "single room",
        bidet: true,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 207.24,
        id: "5fwrgu4i7k55hl6ti",
      },
    ]);
    expect(bookedrooms2).to.deep.equal([
      {
        dateBooked: "2022/04/22",
        roomNumber: 15,
        roomType: "residential suite",
        bidet: false,
        bedSize: "full",
        numBeds: 1,
        costPerNight: 294.56,
        id: "5fwrgu4i7k55hl6sz",
      },
    ]);
  });
  it("should return a message if no bookings were found", () => {
    const currentCustomer3 = customerData[1];
    const bookedrooms3 = filterAlreadyBookedRooms(
      currentCustomer3,
      bookingData,
      roomData
    );
    expect(bookedrooms3).to.equal("You have no bookings yet!");
  });
});

describe("findAvailableRooms", () => {
  it("should be a function", () => {
    expect(findAvailableRooms).to.be.a("function");
  });

  it("based on customers date preference it should return only available rooms in the future", () => {
    const dateValue = "2022-02-26";
    const filteredDates = findAvailableRooms(dateValue, roomData, bookingData);
    expect(filteredDates).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02,
      },
      {
        number: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46,
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26,
      },
      {
        number: 9,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 200.39,
      },
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64,
      },
      {
        number: 11,
        roomType: "single room",
        bidet: true,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 207.24,
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09,
      },
      {
        number: 13,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 423.92,
      },
      {
        number: 14,
        roomType: "residential suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 457.88,
      },
      {
        number: 16,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 325.6,
      },
      {
        number: 17,
        roomType: "junior suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 328.15,
      },
      {
        number: 18,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 496.41,
      },
      {
        number: 19,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 374.67,
      },
      {
        number: 20,
        roomType: "residential suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 343.95,
      },
    ]);
  });

  it("should return a message if no bookings were found", () => {
    const dateValue2 = "2026-01-01";
    const bookedrooms4 = findAvailableRooms(dateValue2, [], bookingData);
    expect(bookedrooms4).to.equal(
      "Sorry There are no available rooms that day."
    );
  });
});

describe("filterByType", () => {
  it("should be a function", () => {
    expect(filterByType).to.be.a("function");
  });

  it("should filter rooms based on room type", () => {
    const bookedrooms5 = findAvailableRooms(
      "2022-23-01",
      roomData,
      bookingData
    );

    const onlyTypes = filterByType(bookedrooms5, "suite");
    console.group(onlyTypes);
    expect(onlyTypes).to.deep.equal([
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64,
      },
    ]);
  });
});
