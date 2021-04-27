const bannersReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BANNERS':
            return action.payload;
        default:
            return state;
    }
}
export default bannersReducer;