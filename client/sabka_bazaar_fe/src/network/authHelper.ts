import { LocalStorage } from "services/storage";

export const getBearerToken = (): Promise<string> => {
  let accessToken = LocalStorage.getStorage("accessToken");
  if (accessToken && accessToken.length) {
    return Promise.resolve(accessToken);
  } else {
    return Promise.reject("Token Not Found");
  }
};
export const getRefreshToken = (): Promise<string> => {
  let refreshToken = LocalStorage.getStorage("refreshToken");
  if (refreshToken && refreshToken.length) {
    return Promise.resolve(refreshToken);
  } else {
    return Promise.reject("Token Not Found");
  }
};
export const setNewBearerToken = (newToken: string): Promise<void> => {
  if (newToken && newToken.length) {
    LocalStorage.setStorage("accessToken", newToken);
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};
