import HttpRequest from './httpRequest'
export default class LocalStore {
  constructor(cart, data) {
    this.cart = cart
    this.data = []
  }

  getLocaldata = (args) => {
    let data = []
    const localData = window.localStorage[args]
    if (window.localStorage[args] !== undefined) {
      data = JSON.parse(localData)
      return {
        ifExists: true,
        items: data.length,
        data: data
      }
    }
    return {
      ifExists: false,
      items: 0,
      data: null
    }
  }


  setLocaldata = (args, data) => {
    const isDuplicate = this.findDuplicateItem(args, data)
    if (!isDuplicate) {
      console.log('%c no duplicated allowed', 'color:#5FFF47')
      const isUpdated = this.updateLocalStorage(args, data)
      if (isUpdated) {
        const AJAX = new HttpRequest('POST', `${process.env.API_URL}add-to-cart`, '')
        AJAX.customAjax()
        .then(result => {
          return true
        })
        .catch(function (error) {
          console.log('Something went wrong', error)
        })
      }
    } else {
      console.error('data already exists please select other item')
      return false
    }
    return true
  }

  updateCartItemQtyAndPrice = (args, data) => {
    const localData = window.localStorage[args]
    if (localData !== undefined) {
      const newArr = JSON.parse(localData)
      const cartIdArr = newArr.map((data) => data.id)
      const itemIndex = cartIdArr.findIndex((cartIdArray) => cartIdArray === data.id)
      newArr.splice(itemIndex, 1, data)
      window.localStorage[args] = JSON.stringify(newArr)
    }
    return true
  }

  removeItemFromLIst = (productId) => {
    const localData = JSON.parse(window.localStorage.cart)
    const updatedList = localData.filter((item) => item.id !== productId)
    window.localStorage.cart = JSON.stringify(updatedList)
    return true
  }

  updateLocalStorage = (args, data) => {
    if (window.localStorage[args] !== undefined) {
      this.data = JSON.parse(window.localStorage[args])
      this.data.push(JSON.parse(JSON.stringify(data)))
      window.localStorage[args] = JSON.stringify(this.data)
    } else {
      this.data.push(JSON.parse(JSON.stringify(data)))
      window.localStorage[args] = JSON.stringify(this.data)
    }
    return true
  }

  findDuplicateItem = (key, item) => {
    const localData = window.localStorage[key]
    if (localData !== undefined) {
      const newArr = JSON.parse(localData)
      const cartIdArr = newArr.map((data) => data.id)
      const isRepeated = cartIdArr.includes(item.id)
      return isRepeated
    }
    return false
  }

  deleteLocaldata = () => {
    window.localStorage.clear()
  }
}
