export default function filterProduct(productCategory,allProducts) {
    //filtering product based on category id
    const filteredproducts = allProducts.filter((product)=>{
        return product.category === productCategory
    })
    return filteredproducts
}