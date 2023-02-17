module.exports = {
    productTotal:(qty,price) => Number(qty) * Number(price),
    updateCartTotal: (qty, price, prodTotal, currTotal) => 
            Number(currTotal) + (Number(qty) * Number(price) - Number(prodTotal)),
    getCartTotal: (items) => items.reduce((acc,curr) => acc + (Number(curr.qty) * Number(curr.price)),0) 
}
