export default class LocalStore {
  constructor(cart,data) {
    this.cart = cart
    this.data = data
  }
  getLocaldata = (args) => {
    const localData = window.localStorage.args
    console.log(JSON.parse(localData))
    return JSON.parse(localData)
  }
  setLocaldata = (args, data) => {
    window.localStorage.args = JSON.stringify(data)
    console.log(data);
    return true
  }
  deleteLocaldata = () => {
    window.localStorage.clear();
  }
}
