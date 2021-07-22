export interface IApiClientOptions {
  apiName: string;
}
export interface IApiClient {
  get(url: string, params?: {}, options?: IApiClientOptions): Promise<any>;
  post(url: string, data?: {}, params?: {}, options?: IApiClientOptions): Promise<any>;
  put(url: string, data?: {}, params?: {}, options?: IApiClientOptions): Promise<any>;
  patch(url: string, data?: {}, params?: {}, options?: IApiClientOptions): Promise<any>;
  delete(url: string, params?: {}, options?: IApiClientOptions): Promise<any>;
}
export interface IAuthHelper {
  getAccessToken(): Promise<string>;
  refreshTokens(): Promise<void>;
}
