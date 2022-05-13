import {
    LOGIN,
    ADDTOCART,
    LOGOUT,
    USERS_ERROR,
    GET_BANNER,
    REMOVE_QTY,
    ADD_QTY,
    SELECT_CATEGORY,
} from "../action.type";

export type StateType ={
 readonly   loading: true,
 readonly  loggedIn: false,
 readonly  shoppingCart: [],
 readonly  products: [],
 readonly  category: [],
 readonly  banner: [],
 readonly  order: 0,
}

const initialState: StateType = {
    loading: true,
    loggedIn: false,
    shoppingCart: [],
    products: [],
    category: [],
    banner: [],
    order: 0,
}

const user = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loggedIn: true };

        case LOGOUT:
            return { ...state, loggedIn: false };

        case GET_BANNER:
            let sortCategory = action.payload.category.sort(
                (a: { order: number }, b: { order: number }) =>
                    a.order > b.order ? 1 : -1
            );
            return {
                ...state,
                banner: action.payload.banner,
                category: sortCategory,
                products: action.payload.products,
                loading: false
            }

        case ADDTOCART:
            var productCart: any = []
            const index = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload)
            if (state.shoppingCart && index !== -1) {
                productCart = state.shoppingCart.map(value => Object.assign({}, value));
                productCart[index]['qty'] = productCart[index]['qty'] + 1
                return {
                    ...state,
                    shoppingCart: [...productCart]

                }
            } else {

                var shoppingCart: any = state.products.map(value => Object.assign({}, value));
                productCart = [...shoppingCart.filter((pid: any) => pid.id === action.payload)];
                var len: number = productCart.length;
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if (len > 0) {
                    productCart[0]['qty'] = 1
                }
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart, ...productCart]

                }
            }

        case REMOVE_QTY:
            var decreaseProduct: any = [];
            let indexItem = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload);
            if (state.shoppingCart && indexItem !== -1) {
                decreaseProduct = state.shoppingCart.map(value => Object.assign({}, value));
                decreaseProduct[indexItem]['qty'] = decreaseProduct[indexItem]['qty'] - 1
                if (decreaseProduct[indexItem]['qty'] === 0) {
                    decreaseProduct = state.shoppingCart.filter((pid: any) => pid.id !== action.payload)
                }
                return {
                    ...state,
                    shoppingCart: [...decreaseProduct]

                }
            } else {
                return {
                    ...state
                }
            }

        case SELECT_CATEGORY:
            return {
                ...state,
                order: action.payload
            }

        case ADD_QTY:
            var increaseProduct: any = [];
            const ind = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload);
            if (state.shoppingCart && ind !== -1) {
                increaseProduct = state.shoppingCart.map(value => Object.assign({}, value));
                increaseProduct[ind]['qty'] = increaseProduct[ind]['qty'] + 1
                return {
                    ...state,
                    shoppingCart: [...increaseProduct]

                }
            } else {
                return {
                    ...state
                }
            }

        case USERS_ERROR:
            console.log(action.payload)
            return {
                ...state
            }
            
        default:
            return {
                ...state
            }

    }
}

export default user