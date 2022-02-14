export const GET_BANNERS = "GET_BANNERS";

export const GET_BANNERS_SUCCESS = "GET_BANNERS_SUCCESS";

export const GET_BANNERS_FAILURE = "GET_BANNERA_FAILURE";


export function getBannersSuccessAction(data) {
    return {
        type: GET_BANNERS_SUCCESS,
        payload: data
    };
}

export function getBannersFailureAction(data) {
    return {
        type: GET_BANNERS_FAILURE,
        payload: data
    };
}

export function getBannersAction() {
    return {
        type: GET_BANNERS
    }
}