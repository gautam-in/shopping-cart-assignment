import IBanners from "../Interfaces/IBanners";
import { ICartItem } from "../Interfaces/ICartItem";
import { ICategories } from "../Interfaces/ICategories";
import { IProduct } from "../Interfaces/IProduct";
import {
    ActionType,
    IAddProductToCartActionType,
    ILoadBannersActionType,
    ILoadCategoiesActionType,
    ILoadProductActionType,
    IRemoveProductFromCartActionType,
    ISetSelectedCategorieIDActionType,
    TActionInterfaces,
} from "./ActionCreators";

// Banner Reducer
export interface IAppState {
    bannerList: Array<IBanners>;
    catergoriesList: Array<ICategories>;
    productList: Array<IProduct>;
    cartItemList: Array<ICartItem>;
    selectedCategorieID: string | null;
}

const initialAppState: IAppState = {
    bannerList: [],
    catergoriesList: [],
    productList: [],
    cartItemList: [],
    selectedCategorieID: null,
};

export default function AppReducer(
    state: IAppState = initialAppState,
    action: TActionInterfaces
): IAppState {
    switch (action.type) {
        case ActionType.LOAD_BANNERS_ACTION_TYPE:
            return processLoadBannersListAction(state, action);
        case ActionType.LOAD_CATEGORIES_ACTION_TYPE:
            return processLoadCategoriesListAction(state, action);
        case ActionType.SET_SELECTED_CATEGORIE_ID:
            return processSetSelectedCategorieIDAction(state, action);
        case ActionType.LOAD_PRODUCT_ACTION_TYPE:
            return processLoadProductListAction(state, action);
        case ActionType.ADD_PRODUCT_TO_CART:
            return processAddProductToCartAction(state, action);
        case ActionType.REMOVE_PRODUCT_FROM_CART:
            return processRemoveProductToCartAction(state, action);
        default:
            return state;
    }
}

function processLoadBannersListAction(
    state: IAppState,
    action: ILoadBannersActionType
): IAppState {
    if (action.bannersList !== undefined) {
        return {
            ...state,
            bannerList: action.bannersList,
        };
    }
    return state;
}

function processLoadCategoriesListAction(
    state: IAppState,
    action: ILoadCategoiesActionType
): IAppState {
    if (action.categoriesList !== undefined) {
        return {
            ...state,
            catergoriesList: action.categoriesList,
        };
    }
    return state;
}

function processSetSelectedCategorieIDAction(
    state: IAppState,
    action: ISetSelectedCategorieIDActionType
): IAppState {
    if (action.selectedCategorieID !== undefined) {
        return {
            ...state,
            selectedCategorieID: action.selectedCategorieID,
        };
    }
    return state;
}

function processLoadProductListAction(
    state: IAppState,
    action: ILoadProductActionType
): IAppState {
    if (action.productList !== undefined) {
        return {
            ...state,
            productList: action.productList,
        };
    }
    return state;
}

function processAddProductToCartAction(
    state: IAppState,
    action: IAddProductToCartActionType
): IAppState {
    if (action.productId !== undefined) {
        const newCartItemList: Array<ICartItem> = updateAddToCartItemList(
            state,
            action.productId
        );
        return {
            ...state,
            cartItemList: newCartItemList,
        };
    }
    return state;
}

function updateAddToCartItemList(state: IAppState, productId: string) {
    const productItem = state.productList.find((item) => item.id === productId);
    const cartItemList: Array<ICartItem> = state.cartItemList;
    if (productItem !== undefined) {
        const newCartItem: ICartItem = {
            id: productItem.id,
            imageURL: productItem.imageURL,
            price: productItem.price,
            name: productItem.name,
            unit: 1,
        };

        if (cartItemList.length > 0) {
            if (cartItemList.find((item) => item.id === newCartItem.id)) {
                return cartItemList.map((item) => {
                    if (item.id === newCartItem.id) {
                        item.unit++;
                    }
                    return item;
                });
            } else {
                return [...cartItemList, newCartItem];
            }
        } else {
            return [newCartItem];
        }
    }

    return cartItemList;
}

function processRemoveProductToCartAction(
    state: IAppState,
    action: IRemoveProductFromCartActionType
): IAppState {
    if (action.productId !== undefined) {
        const newCartItemList: Array<ICartItem> = updateRemoveToCartItemList(
            state,
            action.productId
        );
        return {
            ...state,
            cartItemList: newCartItemList,
        };
    }
    return state;
}

function updateRemoveToCartItemList(
    state: IAppState,
    productId: string
): Array<ICartItem> {
    const cartItemList: Array<ICartItem> = state.cartItemList;

    if (cartItemList.length > 0) {
        const oldItem: ICartItem | undefined = cartItemList.find(
            (item) => item.id === productId
        );

        if (oldItem !== undefined) {
            if (oldItem.unit > 1) {
                return cartItemList.map((item) => {
                    if (item.id === oldItem.id) {
                        item.unit--;
                    }
                    return item;
                });
            } else {
                return cartItemList.filter((items) => items.id !== oldItem.id);
            }
        }
    }

    return cartItemList;
}
