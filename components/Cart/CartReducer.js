export const CartReducer = (state, action) => {

    const { shoppingCart, totalPrice, totalQty } = state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {

        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id);
            if (check) {
                product = action.product;
                product.qty = ++product.qty;
                product.TotalProductPrice = product.qty * product.price;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + product.price;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return {
                    shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty 
                }
            }
            else {
                product = action.product;
                product['qty'] = 1;
                product['TotalProductPrice'] = product.price * product.qty;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + product.price;
                return {
                    shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            }

        case 'INC':
            product = action.cartItem;
            product.qty = ++product.qty;
            product.TotalProductPrice = product.qty * product.price;
            updatedQty = totalQty + 1;
            updatedPrice = totalPrice + product.price;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
            return {
                shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
            }

        case 'DEC':
            product = action.cartItem;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                product.TotalProductPrice = product.qty * product.price;
                updatedPrice = totalPrice - product.price;
                updatedQty = totalQty - 1;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return {
                    shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            }
            else {
                const filtered = shoppingCart.filter(product => product.id !== action.id);
                product = action.cartItem;
                updatedQty = totalQty - product.qty;
                updatedPrice = totalPrice - product.qty * product.price;
                return {
                    shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
                }
            }

        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.id !== action.id);
            product = action.cartItem;
            updatedQty = totalQty - product.qty;
            updatedPrice = totalPrice - product.qty * product.price;
            return {
                shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
            }

        case 'USER_CART':
            return{
                shoppingCart: [...action.shoppingCart], 
                totalPrice: action.totalPrice, 
                totalQty: action.totalQty,
            }

        case 'EMPTY':
            return {
                shoppingCart: [], totalPrice: 0, totalQty: 0
            }

        default:
            return state;

    }

}