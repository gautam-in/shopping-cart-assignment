import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IApiClient } from "network/interfaces";
import { errorHandler, successHandler } from "network/responseHandlers";
import { v4 as uuidv4 } from "uuid";

const getAxiosInstance = (baseUrl: string, client: IApiClient): AxiosInstance => {
  let axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
      "Trace-Id": uuidv4(),
      "Content-Type": "application/json"
    }
  });
  return axiosInstance;
};

class ApiClient implements IApiClient {
  private client: AxiosInstance;
  constructor(baseUrl: string) {
    this.client = getAxiosInstance(baseUrl, this);
  }
  private async request(config: AxiosRequestConfig) {
    try {
      let response = await this.client.request(config);
      let handledResponse = await successHandler(response);
      return Promise.resolve(handledResponse);
    } catch (error) {
      let handledError = await errorHandler(error);
      return Promise.reject(handledError);
    }
  }
  public async get(url: string, params?: Object) {
    return this.request({ method: "GET", url, params });
  }
  public async put(url: string, data: Object, params?: Object) {
    return this.request({ method: "PUT", url, data, params });
  }
  public async post(url: string, data: Object, params?: Object) {
    return this.request({ method: "POST", url, data, params });
  }
  public async delete(url: string, data?: Object, params?: Object) {
    return this.request({ method: "DELETE", url, data, params });
  }
  public async patch(url: string, data: Object, params?: Object) {
    return this.request({ method: "PATCH", url, data, params });
  }
}

const baseURL = window.location.origin;

const apiClient = new ApiClient(baseURL);
export { apiClient as ApiClient };
