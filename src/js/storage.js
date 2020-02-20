import HttpRequest from './httpRequest'



/**
* Creates a new LocalStore.
* @class LocalStore
* @classdesc updates delete and modify the data of localstorage
*/

export default class LocalStore {

  /**
  * @constructs LocalStore
  * @param {object} cart - cart html element
  * @param {object} data - array object
  */

  constructor(cart, data) {
    this.cart = cart
    this.data = []
  }

  /**
  * @function getLocaldata
  * @param {object} args - key for the localstorage object to fetch the value
  * checks if the data is present in the localstorate or not
  * @return {object}
  */

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

  /**
  * @function getLocaldata
  * @param {string} args - key for the localstorage array object
  * @param {object} data - data to be updated in the localStorage
  * handles if item should be updated in the cart or not
  * updates the localstorage using key and array data on click on cta button to move items in the cart
  * @return {boolean}
  */

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

  /**
  * @function updateCartItemQtyAndPrice
  * @param {string} args - key for the localstorage array object
  * @param {object} data - data to be updated in the localstorage
  * updates the quantity of the selected item and price
  * @return {boolean}
  */

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

  /**
  * @function updateCartItemQtyAndPrice
  * @param {string} productId - removes array item where product id matches in the array object
  * removes array item frmo teh array object item
  * @return {boolean}
  */
  removeItemFromLIst = (productId) => {
    const localData = JSON.parse(window.localStorage.cart)
    const updatedList = localData.filter((item) => item.id !== productId)
    window.localStorage.cart = JSON.stringify(updatedList)
    return true
  }


  /**
  * @function updateLocalStorage
  * @param {string} args - key for the localstorage array object
  * @param {object} data - data to be updated in the localstorage
  * updates local storage
  * @return {boolean}
  */
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


  /**
  * @function findDuplicateItem
  * @param {string} args - key for the localstorage array object
  * @param {object} item - item array for the selected
  * finds duplicate item present in the exsisting array object of the localstorage
  * @return {boolean}
  */
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


  /**
  * @function deleteLocaldata
  * cleans localstorage
  */

  deleteLocaldata = () => {
    window.localStorage.clear()
  }
}
