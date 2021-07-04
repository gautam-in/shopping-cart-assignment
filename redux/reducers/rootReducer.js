import {combineReducers} from  'redux';
import { reducer as formReducer } from 'redux-form'
import main from "./main"
import user from "./user"

const rootReducer = combineReducers({
    main: main,
    user:user,
    form:formReducer
})

export default rootReducer;