export default function filterProduct(productCategory,allProducts) {
    const filteredproducts = allProducts.filter((product)=>{
        return product.category === productCategory
    })
    return filteredproducts
}