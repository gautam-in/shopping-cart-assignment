export const countTotalItems = (items) => {
    return items.reduce((sum, { count }) => sum + count, 0);
}

export const countTotalPrice = (items) => {
    return items.reduce((sum, { count, price }) => sum + (count * price), 0);
}