import { IProduct } from "../Interfaces/IProduct";
import { IAppState } from "./AppReducer";

export function getProductListByCategorieId(state: IAppState): Array<IProduct> {
    if (state.productList.length > 0 && state.selectedCategorieID !== null) {
        return state.productList.filter(
            (product) => product.category === state.selectedCategorieID
        );
    } else {
        return state.productList;
    }
}

export function getCartItemCount(state: IAppState): number {
    let cartValue: number = 0;
    if(state.cartItemList.length > 0 ) {
        state.cartItemList.forEach(item => {
            cartValue = cartValue + item.unit;
        })
    }
    return cartValue;
}

export function getTotalCartPrice(state: IAppState): number {
    let cartValue: number = 0;
    if(state.cartItemList.length > 0 ) {
        state.cartItemList.forEach(item => {
            cartValue = cartValue + item.unit * item.price;
        })
    }
    return cartValue;
}
