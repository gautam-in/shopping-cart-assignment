import * as actionTypes from "../actions/actionTypes"
const initstate = {
    cartItems: [],
    showCart:false
}

const reducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const items = [...state.cartItems]
            const index = items.findIndex(it => it.id === action.product.id)
            debugger
            if (index === -1)
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.product, count: 1 }]
                }
            else {
                const item = items[index]
                item.count = item.count + 1
                items[index] = item
                return {
                    ...state,
                    cartItems: items
                }
            }
        }
        case actionTypes.INCREMENT_ITEM: {
            const items = [...state.cartItems]
            const index = items.findIndex(it => it.id === action.product.id)
            const item = items[index]
            item.count = item.count + 1
            items[index] = item
            if(item.count>=0)
            return {
                ...state,
                cartItems: items
            }
            return {...state}
        }
        case actionTypes.DECREMENT_ITEM: {
            const items = [...state.cartItems]
            const index = items.findIndex(it => it.id === action.product.id)
            const item = items[index]
            item.count = item.count - 1
            // if (item.count === 0){
            //     const items1=items.filter(it=>it.id!==items[index].id)
            //     debugger
            //     return{
            //         ...state,
            //         cartItems:items1
            //     }
            // }
            if (item.count >= 0) {
                items[index] = item
                return {
                    ...state,
                    cartItems: items
                }
            }
           
                return {
                    ...state,

                }
        }

        case actionTypes.SHOW_CART:{
            debugger
            return{
                ...state,
                showCart:action.show
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer