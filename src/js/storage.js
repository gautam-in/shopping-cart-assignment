export default class LocalStore {
  constructor(cart,data) {
    this.cart = cart
    this.data = []

  }
  getLocaldata = (args) => {
    const localData = window.localStorage
    console.log(JSON.parse(localData))
    // if(localData) return JSON.parse(localData)
    return
  }
  setLocaldata = (args, data) => {
    const isDuplicate = this.findDuplicateItem(args,data)
    if(isDuplicate) console.log('found duplicate')
    this.data.push(JSON.parse(JSON.stringify(data)))
    window.localStorage[args] = JSON.stringify(this.data)
    // this.data = JSON.parse(window.localStorage[args])
    // console.log(this.data, 'data from local class')
    // console.log(data, 'data from local')
    // return true
  }
  deleteLocaldata = () => {
    window.localStorage.clear();
  }
  findDuplicateItem = (key,item) => {
    const arrOriginal = JSON.parse(window.localStorage[key])
    console.log(arrOriginal, 'original')
    // return false
  }
}
