/* Retrieve data from localStorage API */
export const retreiveLocalCartData = () =>{
    return JSON.parse(localStorage.getItem("cartData"))
}

export const retreiveLocalProductData = () => {
    return JSON.parse(localStorage.getItem("productData"))
}