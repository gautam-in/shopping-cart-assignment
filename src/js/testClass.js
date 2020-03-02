export default class GreetUser {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
  sayHello = () => {
    return `${this.name + this.lastname}`
  }
  sum = (a, b) => {
    return a + b
  }


}
