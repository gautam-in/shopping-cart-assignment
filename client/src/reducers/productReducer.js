const initialState = {
    productList: []
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {

        case 'GET_PRODUCTS':
            return {
                ...state,
                productList: payload
            }

            default:
                return state
    }
}