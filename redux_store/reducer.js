
const rootReducer = (state = {modalOpen: false}, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL_OPEN':
            return {...state, modalOpen: !state.modalOpen};
        default:
            return state
    }
};

export default rootReducer;