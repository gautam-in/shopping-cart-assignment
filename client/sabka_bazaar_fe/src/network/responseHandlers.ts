import { AxiosError, AxiosResponse } from "axios";
import { serverErrors } from "network/constants";
export const successHandler = (response: AxiosResponse) => {
  const data = response.data ?? null;
  if (!data) {
    return Promise.resolve({});
  }
  return Promise.resolve(data);
};
export const errorHandler = (error: AxiosError) => {
  let errorMessage = serverErrors.SERVER_ERROR;
  if (error.message && error.message === "Network Error") {
    //TODO Deal no network error
  }
  if (error.response.status >= 500) {
    errorMessage = serverErrors.SERVER_ERROR;
    return errorMessage;
  }
  if (error.response.status >= 400 && error.response.status < 500) {
    errorMessage = serverErrors.CLIENT_ERROR;
    return errorMessage;
  }
  if (error.response) {
    const { data } = error.response.data;
    if (data) {
      errorMessage = data.errorMessage;
    }
  } else {
  }
  return Promise.resolve(errorMessage);
};
