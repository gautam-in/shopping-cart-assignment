
export function addItemToCart(item) {
    return dispatch => {
            dispatch({ type: 'ADD_ITEM_TO_CART', item });
        }
}
export function removeItemToCart(item) {
    return dispatch => {
            dispatch({ type: 'REMOVE_ITEM_FROM_CART', item });
        }
}
export function toggleCart() {
    return dispatch => {
            dispatch({ type: 'TOGGLE_CART' });
        }
}
export function decrementItemCount(item) {
    return dispatch => {
            dispatch({ type: 'DECREMENT_ITEM_COUNT', item });
        }
}
