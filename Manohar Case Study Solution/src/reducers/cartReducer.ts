import { Product } from "../components/products/IProduct";

export interface CartItem {
    name: string;
    imageURL: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    sku: string;
    id: string;
    quantity: number;
    totalPrice: number
}

function cartReducer(defStore:CartItem[] = [], action: any){
    switch(action.type){
        case 'ADD_TO_CART':
            if(defStore.length === 0){
                let newArray: CartItem[] = action.product.filter((a:Product) => a.id === action.productId);
                newArray[0].quantity = 1;
                newArray[0].totalPrice = newArray[0].price;
                return [ ...newArray];
            }
            else{
                let index = defStore.findIndex((a:Product) => a.id === action.productId);
                // console.log(index);
                if(index >= 0){   
                    return [
                        ...defStore.slice(0, index),
                        { ...defStore[index], quantity: defStore[index].quantity + 1, totalPrice: defStore[index].totalPrice + defStore[index].price},
                        ...defStore.slice(index + 1),
                    ];
                }
                else{
                    let newArray: CartItem[] = action.product.filter((a:Product) => a.id === action.productId);
                newArray[0].quantity = 1;
                newArray[0].totalPrice = newArray[0].price;
                return [...defStore,...newArray]
                }
            }
        case "REMOVE_FOM_CART":
            let index = defStore.findIndex((a:Product) => a.id === action.productId);
            if(defStore[index].quantity === 1){
                let newArray: CartItem[] = defStore.filter(a => a.id !== action.productId)
                return [ ...newArray]
            }
            else{
                return [
                    ...defStore.slice(0, index),
                    { ...defStore[index], quantity: defStore[index].quantity - 1, totalPrice: defStore[index].totalPrice - defStore[index].price},
                    ...defStore.slice(index + 1),
                ];
            }
        default: return defStore;
    }

}

export default cartReducer;