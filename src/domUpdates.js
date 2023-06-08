import { userTotal } from './scripts.js'
const renderTotalPrice = (currentCustomer) => {
  userTotal.innerText = currentCustomer.totalPrice
}
export { renderTotalPrice}