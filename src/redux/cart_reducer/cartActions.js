import { cartActionTypes } from "./cartActionTypes";


const addItem = item => ({
    type : cartActionTypes.ADD_ITEM,
    payload : item
});

const clearItem = item => ({
    type : cartActionTypes.CLEAR_ITEM,
    payload : item
})

export { addItem , clearItem };


