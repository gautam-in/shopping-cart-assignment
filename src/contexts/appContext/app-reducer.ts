import get from 'lodash/get';
import { REMOVE_CART_ITEM, SET_SELECTED_CATEGORY, UPDATE_CART_ITEM } from '../../constants/actions';
import { AppState, SelectedCategory } from './app-context';
import { Product } from '../../services/AppService';

interface Action {
    type: string;
    payload: Product | SelectedCategory;
}

const appReducer = (state: AppState, action: Action): AppState => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_CART_ITEM: {
            const product = payload as Product;
            if (state.cartItems.find((e) => e.id === get(product, 'id'))) {
                return {
                    ...state,
                    cartCount: state.cartCount + 1,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === get(product, 'id')) {
                            return { ...item, qty: item.qty + 1 };
                        }
                        return item;
                    }),
                };
            } else {
                return {
                    ...state,
                    cartCount: state.cartCount + 1,
                    cartItems: state.cartItems.concat({ ...product, qty: 1 }),
                };
            }
        }
        case REMOVE_CART_ITEM: {
            const product = payload as Product;
            const findItem = state.cartItems.find((item) => item.id === get(product, 'id'));
            if (findItem) {
                if (findItem.qty > 1) {
                    return {
                        ...state,
                        cartCount: state.cartCount - 1,
                        cartItems: state.cartItems.map((item) => {
                            if (item.id === get(product, 'id')) {
                                return { ...item, qty: item.qty - 1 };
                            }
                            return item;
                        }),
                    };
                } else {
                    return {
                        ...state,
                        cartCount: state.cartCount - 1,
                        cartItems: state.cartItems.filter((item) => item.id !== get(product, 'id')),
                    };
                }
            } else {
                return { ...state };
            }
        }
        case SET_SELECTED_CATEGORY: {
            const selectedCategory = payload as SelectedCategory;
            return {
                ...state,
                selectedCategory: selectedCategory,
            };
        }
        default:
            return state;
    }
};

export default appReducer;
