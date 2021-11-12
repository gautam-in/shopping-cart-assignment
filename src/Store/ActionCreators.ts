import IBanners from "../Interfaces/IBanners";
import { ICategories } from "../Interfaces/ICategories";
import { IProduct } from "../Interfaces/IProduct";

//ACTION TYPES
export enum ActionType {
    LOAD_BANNERS_ACTION_TYPE = "LOAD_BANNERS_ACTION_TYPE",
    LOAD_CATEGORIES_ACTION_TYPE = "LOAD_CATEGORIES_ACTION_TYPE",
    LOAD_PRODUCT_ACTION_TYPE = "LOAD_PRODUCT_ACTION_TYPE",
    SET_SELECTED_CATEGORIE_ID = "SET_SELECTED_CATEGORIE_ID",
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
}

// Banners Action Type Interface
export interface ILoadBannersActionType {
    type: ActionType.LOAD_BANNERS_ACTION_TYPE;
    bannersList: Array<IBanners>;
}

// Categories Action Type Interface
export interface ILoadCategoiesActionType {
    type: ActionType.LOAD_CATEGORIES_ACTION_TYPE;
    categoriesList: Array<ICategories>;
}

export interface ISetSelectedCategorieIDActionType {
    type: ActionType.SET_SELECTED_CATEGORIE_ID;
    selectedCategorieID: string | null;
}

// Product Action Type Interface
export interface ILoadProductActionType {
    type: ActionType.LOAD_PRODUCT_ACTION_TYPE;
    productList: Array<IProduct>;
}

// Cart Action Type Interface
export interface IAddProductToCartActionType {
    type: ActionType.ADD_PRODUCT_TO_CART;
    productId: string;
}

export interface IRemoveProductFromCartActionType {
    type: ActionType.REMOVE_PRODUCT_FROM_CART;
    productId: string;
}

//ACTIONS INTERFACE
export type TActionInterfaces =
    | ILoadBannersActionType
    | ILoadCategoiesActionType
    | ILoadProductActionType
    | ISetSelectedCategorieIDActionType
    | IAddProductToCartActionType
    | IRemoveProductFromCartActionType;

// ACTION CREATORS
// Banners Action Creator
export function loadBannersListAction(
    bannerList: Array<IBanners>
): ILoadBannersActionType {
    return {
        type: ActionType.LOAD_BANNERS_ACTION_TYPE,
        bannersList: bannerList,
    };
}

// Categories Action Creator
export function loadCategoriesListAction(
    categoriesList: Array<ICategories>
): ILoadCategoiesActionType {
    return {
        type: ActionType.LOAD_CATEGORIES_ACTION_TYPE,
        categoriesList: categoriesList,
    };
}

export function setSelectedCategorieIDAction(
    categorieId: string | null
): ISetSelectedCategorieIDActionType {
    return {
        type: ActionType.SET_SELECTED_CATEGORIE_ID,
        selectedCategorieID: categorieId,
    };
}

// Product Action Creator
export function loadProductListAction(
    productList: Array<IProduct>
): ILoadProductActionType {
    return {
        type: ActionType.LOAD_PRODUCT_ACTION_TYPE,
        productList: productList,
    };
}

// Cart Action Creator
export function addProductToCartAction(
    productId: string
): IAddProductToCartActionType {
    return {
        type: ActionType.ADD_PRODUCT_TO_CART,
        productId: productId,
    };
}

export function RemoveProductFromCartAction(
    productId: string
): IRemoveProductFromCartActionType {
    return {
        type: ActionType.REMOVE_PRODUCT_FROM_CART,
        productId: productId,
    };
}

