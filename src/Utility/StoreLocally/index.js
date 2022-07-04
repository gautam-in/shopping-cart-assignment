/* Store data in localStorage API */
export const storeCartDataLocally = (items) => {
    localStorage.setItem("cartData", JSON.stringify(items))
}

export const storeProductDataLocally = (items) => {
    localStorage.setItem("productData", JSON.stringify(items))
}

export const storeCategoryDataLocally = (items) => {
    localStorage.setItem("categoryData", JSON.stringify(items))
}