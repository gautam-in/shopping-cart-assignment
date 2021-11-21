export function addToCart(product) {
    return ({
        type: "ADD_TO_CART",
        payload: { id:product.id,name: product.name, price: product.price, imageURL: product.imageURL }
    })
}

export function decreaseQuantity(id){
    return {
        type:"DECREASE_QUANTITY",
        id:id
    }
}
export function increaseQuantity(id){
    return {
        type:"INCREASE_QUANTITY",
        id:id
    }
}
export function setToggleModal(){
    return {
        type:"TOGGLEMODAL"
    }
}