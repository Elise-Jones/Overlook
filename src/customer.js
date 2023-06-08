const getRandomIndex = (usersLength) => {
  return Math.floor(Math.random() * usersLength);
};

const getRandomCustomer = (customerData) => {
  if (customerData) {
    return customerData[getRandomIndex(customerData.length)];
  } else {
    return "user data not found";
  }
};

export { getRandomCustomer, getRandomIndex };
