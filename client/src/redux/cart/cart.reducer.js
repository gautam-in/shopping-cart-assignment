import * as types from './cart.types';

const INITIAL_STATE = {
    itemsInCart: [],
    totalCount: 0
}

function getTotalCount(itemsInCart) {
    const count = itemsInCart.reduce((acc, curr) => {
        acc = acc + curr.quantity
        return acc;
    }, 0)

    return count
}

function getCheckoutAmount(itemsInCart) {
    const totalPrice = itemsInCart.reduce((acc, curr) => {
        acc = acc + (curr.quantity * curr.price)
        return acc;
    }, 0)

    return totalPrice;
}

function addItemToCart(itemsInCart, itemToAdd) {
    let products = itemsInCart.slice();
    if (itemsInCart.map((item) => item.id).includes(itemToAdd.id)) {
        products = itemsInCart.map((item) => {
            if (item.id === itemToAdd.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item
            }
        })
    } else {
        products.push({
            ...itemToAdd,
            quantity: 1
        })
    }

    return products;

}

function removeItemToCart(itemsInCart, itemToAdd) {
    return itemsInCart.map((item) => {
        if (item.id === itemToAdd.id) {
            return {
                ...item,
                quantity: item.quantity - 1
            }
        }
        else {
            return item
        }
    }).filter((item) => item.quantity > 0)
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.ADD_ITEM_CART: {
            const itemsInCart = addItemToCart(state.itemsInCart, action.payload);
            const totalCount = getTotalCount(itemsInCart);
            const totalAmount = getCheckoutAmount(itemsInCart);
            return {
                ...state,
                itemsInCart,
                totalCount,
                totalAmount
            }
        }
        case types.REMOVE_ITEM_CART: {
            const itemsInCart = removeItemToCart(state.itemsInCart, action.payload);
            const totalCount = getTotalCount(itemsInCart);
            const totalAmount = getCheckoutAmount(itemsInCart);
            return {
                ...state,
                itemsInCart,
                totalCount,
                totalAmount
            }
        }
        case types.GET_ITEM_COUNT: {
            return {
                ...state,
                totalCount: getTotalCount(state.itemsInCart)
            }
        }
        default:
            return state
    }
}