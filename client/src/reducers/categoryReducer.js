const initialState = {
    categories: null
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {

        case "GET_CATEOGRIES":
            return {
                ...state,
                categories: payload
            }

            default:
                return state
    }
}