export const cartReducer = (state = [], action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CART":
            const existingCartItem = state && state.length && state.find(
                (item) => item.id === payload.data.id
            );
            if (existingCartItem) {
                return state.map((item) => item.id === payload.data.id ? { ...item, count: item.count + 1 } : item)
            }
            return [...state, { ...payload.data, count: 1 }]
        case "REMOVE":
            const filterData = state.filter(rem => rem.id !== payload.data.id)
            return filterData
        case "INCREMENT":
            const increaseItems = state.map(item => item.id === payload.data.id
                ? { ...item, count: item.count + 1 } : item)
            return increaseItems
        case "DECREMENT":
            const decreaseItems = state.map(item => item.id === payload.data.id
                ? { ...item, count: item.count - 1 } : item)
            return decreaseItems;

        default:
            return state;
    }
}