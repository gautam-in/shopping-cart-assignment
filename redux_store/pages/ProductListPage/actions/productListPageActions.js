//Action Types
export const FETCH_PRODUCT_START = "FETCH_PRODUCT_START";
export const FETCH_PRODUCT_OK = "FETCH_PRODUCT_OK";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";



//Action Creator
export const fetchProductOk = (products) => ({
  type: FETCH_PRODUCT_OK,
  payload: {products}
});

export const fetchProductStart = () => ({
  type: FETCH_PRODUCT_START
});

export const fetchProductError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  payload: {error}
});


// API Calls
export function fetchProduct() {
  return dispatch => {
    dispatch(fetchProductStart());
    return fetch("/products", {
      Accept: 'appliation/json'
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchProductOk(json));
      return json;
    })
    .catch(error => dispatch(fetchProductError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}