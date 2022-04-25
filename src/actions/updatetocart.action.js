import { store } from '../index';

export const incrementqty = (id) => (dispatch) => {
    debugger;
    const state = store.getState();
    const product = state.cart.cart.filter((product) => product.id === id);
    console.log(product)
    dispatch({
        type: 'ADDTOCART',
        payload: product[0]
    })
}


export const decrementqty = (id) => (dispatch) => {
    const state = store.getState();
    const product = state.cart.cart.filter((product) => product.id === id);
    dispatch({
        type: 'DECREMENT',
        payload: product[0]
    })
}