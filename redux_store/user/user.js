'use strict'

export class User {
   constructor(firstname, lastname, email, password) {
      this.firstname = firstname
      this.lastname = lastname
      this.email = email
      this.password = password
   }
   
   equals = (email, password) => {
      return (this.email == email && this.password == password)
   }
}

export class RegisteredUser extends Array {
   isExists = (email) => {
      const exists = this.filter((an_user, index) => {
         if (an_user.email == email) { return true }
         else { return false}
      })
      return (exists.length > 0)
   }
   push = (user) => {
      if (!this.isExists(user.email)) {
         super.push(user)
      }
   }
}