import { Product } from "../components/products/IProduct";

export function MainCart(product: Product[]){
    return {type: "MAIN_CART", product};
}

export function AddToCartSync(productId: string,product: Product[]) {
    return {type: "ADD_TO_CART", productId,product};
}

export function RemoveFromCart(productId: string){
    return {type: "REMOVE_FOM_CART",productId};
}

export function AddToCart(productId: string,product: Product[]){
    // console.log('action fetch');
    return (dispatch: any) => {
    fetch("http://localhost:5000/addToCart",
    {
        method: 'POST',
        body: JSON.stringify({productID:productId})

    })
      .then((res) => res.json())
      .then((posts) => {
          console.log(posts);
          dispatch(AddToCartSync(productId,product))
        })
    }
}

export function CheckScreenSize(displayBackground: boolean){
    return {type: "CHECK_SCREEN_SIZE",displayBackground};
}