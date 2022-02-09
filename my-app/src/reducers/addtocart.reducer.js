export function addtocart(defStore = [], action) {
    var prodId = action.productId;
    var index = defStore.findIndex((c) => c.id === prodId);
    var newStore;
    switch (action.type) {
        case "ADD_CART_ITEMS": 
            if (index !== undefined && index !== -1) {
                newStore = [...defStore.slice(0, index), { ...defStore[index], count: defStore[index].count + 1 },
                ...defStore.slice(index + 1)]
            } else {
                newStore = [...defStore, { id: prodId, count: 1 }]
            }
            return newStore;
        case "REMOVE_CART_ITEMS":
            if (defStore[index].count === 1) {
                newStore = [...defStore.slice(0, index),...defStore.slice(index + 1)]
            } else {
                newStore = [...defStore.slice(0, index), { ...defStore[index], count: defStore[index].count - 1 },
                ...defStore.slice(index + 1)]
            }
            return newStore;
        default:
            return defStore;
    }
}