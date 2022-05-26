
const INITIAL_STATE = {
    currentUser: null,
    loading: false,
};

export const SIGNUPREDUCER = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "SET_LOGOUT":
            return {
                ...state,
                currentUser: null
            }
            default:
                return state;
    }
}