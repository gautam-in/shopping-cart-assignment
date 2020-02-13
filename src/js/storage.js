export default class LocalStore {
  constructor(cart,data) {
    this.cart = cart
    this.data = []
  }
  getLocaldata = (args) => {
    let data = []
    const localData = window.localStorage[args]
    if(window.localStorage[args] !== undefined){
      data = JSON.parse(localData)
      return { ifExists:true, items:data.length, data:data }
    }
    return {ifExists:false , items:0, data:null}
  }
  setLocaldata = (args, data) => {
    const isDuplicate = this.findDuplicateItem(args,data)
    if (window.localStorage[args] === undefined) {
      console.log('%cinside empty storage', 'color:#5FFF47')
      this.updateLocalStorage(args,data)
    }else if(!isDuplicate){
      console.log('%cdata exists & no duplicated allowed','color:#5FFF47')
      if(window.localStorage[args] !== undefined){
        debugger
        const response = this.getLocaldata(args)
      }
      this.updateLocalStorage(args,data)
    }else{
      console.error('data already exists')
      return false
    }
    return true
  }

  updateLocalStorage = (args, data) => {
    this.data.push(JSON.parse(JSON.stringify(data)))
    window.localStorage[args] = JSON.stringify(this.data)
    return true
  }

  findDuplicateItem = (key,item) => {
    const localData = window.localStorage[key]
    if(localData !== undefined){
      const newArr = JSON.parse(localData)
      const cartIdArr = newArr.map((data)=> data.id)
      const isRepeated = cartIdArr.includes(item.id)
      return isRepeated
    }
    return false
  }

  deleteLocaldata = () => {
    window.localStorage.clear();
  }
}
