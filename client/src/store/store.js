import { createStore } from 'redux';
import {cartReducer} from '../reducers/cartReducer.js'

const defStoreData = {cartItems:[],totalItems:0,totalValue:0,toggleModal:false}
 const store = createStore(cartReducer,defStoreData);
 export default store;