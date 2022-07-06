function addCart(data) {
    return {
        type: "ADD_CART",
        payload: { data }
    }
}
function removeItem(data) {
    return {
        type: "REMOVE",
        payload: { data }
    }
}
function decrementItem(data) {
    return {
        type: "DECREMENT",
        payload: { data }
    }
}

function incrementItem(data) {
    return {
        type: "INCREMENT",
        payload: { data }
    }
}





export { addCart, removeItem, decrementItem, incrementItem }