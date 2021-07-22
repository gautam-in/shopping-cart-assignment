import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getBearerToken, getRefreshToken, setNewBearerToken } from "network/authHelper";

export const bearerTokenReqInterceptor = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(async function (config) {
    //TODO for login we not need to send token in header 17/3/2021

    try {
      if (config.url === "/login") {
        config.headers["Accept-Language"] = "en";
        config.headers["Access-Control-Allow-Origin"] = "*";
      } else {
        const token = await getBearerToken();
        config.headers["Accept-Language"] = "en";
        config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  });
  return axiosInstance;
};

export const refreshTokenInterceptor = (axiosInstance: AxiosInstance, baseURL: string): AxiosInstance => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async function (error) {
      // TODO replace with actual end-point 11/2/2021
      const refreshTokenEndPoint = `${baseURL}refresh`;

      const originalRequest = error.config;
      if (originalRequest.url === refreshTokenEndPoint) {
        return Promise.reject(error);
      }
      // TODO replace with actual error code 11/2/2021

      // TODO also check it with with some response message 17/3/2021
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = await getRefreshToken();

        try {
          const apiRes = await axios.post(refreshTokenEndPoint, { refreshToken });
          await setNewBearerToken(apiRes.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${apiRes.data.accessToken}`;
          return axios(originalRequest);
        } catch (error) {
          console.log(error);
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
