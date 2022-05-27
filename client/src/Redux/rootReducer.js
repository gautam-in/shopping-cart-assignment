import { combineReducers } from 'redux';
import {SIGNUPREDUCER} from '../Components/Signup/SignupReducer';
import {HOMEREDUCER} from '../Components/Home/HomeReducer';
import { PRODUCTREDUCER } from '../Components/ProductList/ProductListReducer';
import { CARTREDUCER } from "../Components/Cart/CartReducer";

const rootReducer = combineReducers({
    SIGNUPREDUCER,
    HOMEREDUCER,
    PRODUCTREDUCER,
    CARTREDUCER
});
  
export default rootReducer;