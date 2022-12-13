import axios from "axios";
import * as actions from "../api";

export const createRequest = (url, method = "get", data = null) => {
  let request = {
    method,
    url,
  };
  request.data = data;
  return request;
};

const api =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    try {
      const { url, method, data, onStart, onSuccess, onError, reducerData, onSuccessCallback } = action.payload;
      if (onStart) {
        dispatch({ type: onStart, payload: { reducerData: reducerData } });
      }
      next(action);
      axios
        .request(createRequest(url, method, data))
        .then((response) => {
          dispatch(actions.apiCallSuccess(response.data));

          if (onSuccess) {
            dispatch({
              type: onSuccess,
              payload: { data: response.data, reducerData: reducerData },
            });
          }
          if (onSuccessCallback) {
            onSuccessCallback({ data: response.data, reducerData: reducerData });
          }
        })
        .catch((error) => {
          console.log("err ", error);

          if (onError) {
            dispatch({
              type: onError,
              payload: { data: error.message, reducerData: reducerData },
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

export default api;
