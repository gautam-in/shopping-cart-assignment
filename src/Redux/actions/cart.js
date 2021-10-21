import { actions } from '../actionTypes/actionConstants';
import { api } from '../../Helpers/axiosInstance';

export const upateCart = (id, operation) => {
    return async (dispatch, getState) => {
        const productList = getState().products.allProducts;
        const cartItems = getState().cart.cartItems;
        const currentItem = productList.find(({ id: currentItemId }) => currentItemId === id);
        const isItemInCart = cartItems.find(({ id }) => id === currentItem.id);
        let finalItem = [];
        if (!isItemInCart) {
            finalItem = [...cartItems, { ...currentItem, count: 1 }]
        } else {
            finalItem = cartItems.map(item => {
                if (item.id === currentItem.id) {
                    operation === 'add' ? item.count = item.count + 1 : item.count = item.count - 1
                }
                return item;
            }).filter(({ count }) => count)
        }
        try {
            const result = await api.post('/addToCart', id);
            result && dispatch({
                type: actions.UPDATE_TO_CART,
                payload: finalItem
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const toggleCart = (payload) => {
    return {
        type: actions.OPEN_CART,
        payload: payload,
    }
}

