export const BANNERS = "BANNERS";
export const BANNERS_SUCCESS = "BANNERS_SUCCESS";
export const BANNERS_FAILURE = "BANNERA_FAILURE";

export function fetchBannersSuccessAction(data) {
  return {
    type: BANNERS_SUCCESS,
    payload: data,
  };
}

export function fetchBannersFailureAction() {
  return {
    type: BANNERS_FAILURE,
  };
}

export function fetchBannersAction() {
  return {
    type: BANNERS,
  };
}
