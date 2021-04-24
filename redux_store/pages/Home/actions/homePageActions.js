//Action Types
export const FETCH_BANNER_START = "FETCH_BANNER_START";
export const FETCH_BANNER_OK = "FETCH_BANNER_OK";
export const FETCH_BANNER_ERROR = "FETCH_BANNER_ERROR";
export const NEXT_SLIDE = "NEXT_SLIDE";
export const PREV_SILDE = "PREV_SILDE";
export const GOTO_SLIDE_INDEX = "GOTO_SLIDE_INDEX";
export const ANIMATING = "ANIMATING";
export const ANIMATION_DONE = "ANIMATION_DONE";



//Action Creator
export const fetchBannerOk = (banners) => ({
  type: FETCH_BANNER_OK,
  payload: {banners}
});

export const fetchBannerStart = () => ({
  type: FETCH_BANNER_START
});

export const fetchBannerError = (error) => ({
  type: FETCH_BANNER_ERROR,
  payload: {error}
});

export const nextSlide = () => ({
  type: NEXT_SLIDE
});

export const prevSlide = () => ({
  type: PREV_SILDE
});

export const gotoSlideIndex = (index) => ({
  type: GOTO_SLIDE_INDEX,
  payload: {index}
});

export const animatingSlide = () => ({
  type: ANIMATING
});

export const animationDone = () => ({
  type: ANIMATION_DONE
});


// API Calls
export function fetchBanner() {
  return dispatch => {
    dispatch(fetchBannerStart());
    return fetch("/banners", {
      Accept: 'appliation/json'
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchBannerOk(json));
      return json;
    })
    .catch(error => dispatch(fetchBannerError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}