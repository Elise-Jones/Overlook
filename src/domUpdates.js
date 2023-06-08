import { userTotal } from './scripts.js'
const renderTotalPrice = (currentUser) => {
  userTotal.innerText = currentUser.totalPrice
}
export { renderTotalPrice}