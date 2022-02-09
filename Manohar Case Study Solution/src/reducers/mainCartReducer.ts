import { Product } from "../components/products/IProduct";
// import { IStore } from "../model/IStore";

// const initialState = {
//     cart: [],
//     mainCart: []
// }

// function mainCartReducer(defStore:IStore = initialState, action: any){
//     switch(action.type){
//         case 'MAIN_CART':
//             return {
//                 cart: defStore.cart,
//                 mainCart: action.product
//             }
//         default: return defStore;
//     }

// }


function mainCartReducer(defStore: Product[] = [],action: any){
    switch(action.type){
        case 'MAIN_CART':
            return [...action.product];
        default: return defStore
    }
}
export default mainCartReducer;