const categoryListReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_LIST':
            return action.payload;
        default:
            return state;
    }
}
export default categoryListReducer;