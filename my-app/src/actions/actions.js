const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";
const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";

export function UpdateProducts(products) {
    return { type: UPDATE_PRODUCTS, products };
}
export function AddCartItems(productId){
    return{type: ADD_CART_ITEMS,productId };
}
export function RemoveCartItems(productId){
    return{type: REMOVE_CART_ITEMS,productId };
}