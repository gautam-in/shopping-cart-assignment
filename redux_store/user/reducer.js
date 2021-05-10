import {
   LOGIN_ACTION,
   LOGOUT_ACTION,   
   REGISTER_ACTION,
} from './constants';

import lodash from "lodash"
import { RegisteredUser, User } from './user';

const initialState = {
   registerStatus:[],
   loginStatus: [],
   loggedIn: null,
   registeredUser: new RegisteredUser(),
}
initialState.registeredUser.push(new User("Taniya", "Paul", "taniya@gmail.com", "******"))

const user = (state = initialState, action) => {
   // TODO fix deep copy
   const new_state = lodash.cloneDeep(state)
   switch (action.type) {
      case LOGIN_ACTION:
      new_state.loggedIn = action.payload.email      
      return new_state
      case LOGOUT_ACTION:
      new_state.loggedIn = null
      return new_state
      case REGISTER_ACTION:
         debugger
      let exists = new_state.registeredUser.isExists(action.payload.user.email)
      if (!exists) {
         new_state.registeredUser.push(lodash.cloneDeep(action.payload.user))
      }      
      return new_state
      default:
      return new_state
   }
}

export default user;