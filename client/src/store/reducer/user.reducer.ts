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

import { BannerType, ProductType, CategoryType } from "../../type";
export type StateType = {
    readonly loading: boolean,
    readonly loggedIn: boolean,
    readonly shoppingCart: ProductType[],
    readonly products: ProductType[],
    readonly category: CategoryType[],
    readonly banner: BannerType[],
    readonly order: number,
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

const user = (state = initialState, action: { type: string; payload: any; }): StateType => {
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
            var productCart: ProductType[] = []
            const index = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload)
            if (state.shoppingCart && index !== -1) {
                productCart = state.shoppingCart.map((d) => d.id === action.payload ? { ...d, qty: d.qty + 1 } : { ...d })
                return {
                    ...state,
                    shoppingCart: [...productCart]
                }
            } else {
                let product  = state.products.find(d => d.id === action.payload);
                if (product) {
                    return {
                        ...state,
                        shoppingCart: [...state.shoppingCart, { ...product, qty: 1 }]
                    }
                }
                return {
                    ...state,
                }
            }

        case REMOVE_QTY:
            var decreaseProduct: ProductType[] = [];
            let indexItem = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload);
            if (state.shoppingCart && indexItem !== -1) {
                decreaseProduct = state.shoppingCart.map(d => d.id===action.payload?{...d, qty: d.qty -1 }: {...d} );
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
            var increaseProduct: ProductType[] = [];
            const ind = state.shoppingCart.findIndex((pid: any) => pid.id === action.payload);
            if (state.shoppingCart && ind !== -1) {
                increaseProduct = state.shoppingCart.map((d) => d.id === action.payload ? { ...d, qty: d.qty + 1 } : { ...d })
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