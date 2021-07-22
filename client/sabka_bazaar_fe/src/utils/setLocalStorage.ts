import { LocalStorage } from "services/storage";

export const setToken = (token: string) => {
  LocalStorage.setStorage("token", token);
};

export const setUser = (role: Array<string>) => {
  LocalStorage.setStorage("user", { roles: role });
};
