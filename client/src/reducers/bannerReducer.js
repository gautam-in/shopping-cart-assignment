const initialState = {
    bannerList: []
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {

        case 'GET_BANNERS':
            return {
                ...state,
                bannerList: payload
            }

            default:
                return state
    }
}