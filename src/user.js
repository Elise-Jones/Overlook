const getRandomIndex = (usersLength) => {
  return Math.floor(Math.random() * usersLength);
};
const getRandomUser = (userData) => {
  if (userData) {
    return userData[getRandomIndex(userData.length)];
  } else {
    return "user data not found";
  }
}
  
export { getRandomUser, getRandomIndex}