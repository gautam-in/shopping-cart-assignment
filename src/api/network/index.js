import axios from "axios";
import env from '../../envConfig';
import cookie from "react-cookies";
export const doRequest = async requestdata => {
  const defaultHeader = {};
  // timeout specifies the number of milliseconds before the request times out.
  // If the request takes longer than timeout, the request will be aborted.
  //const timeout = 5000; // default is 0 (no timeout)

  // xsrfCookieName is the name of the cookie to use as a value for xsrf token
  const xsrfCookieName = "XSRF-TOKEN"; // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  const xsrfHeaderName = "X-XSRF-TOKEN"; // default

  const {
    headers = { authorization: "Bearer " + cookie.load("accessToken") },
    method = "get",
    url = "",
    baseURL = env.apiUrl,
    params = {},
    data = {},
    onUploadProgress
  } = requestdata;

  //create request config according to data
  const requestConfig = {
    headers: Object.assign(defaultHeader, headers),
    method,
    url,
    baseURL,
    params,
    data,
    xsrfCookieName,
    xsrfHeaderName,
    onUploadProgress
  };

  try {
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    //safe check response.data is available or not

    const { response: { data = {} } = {} } = error || {};
    return data;
  }
};
