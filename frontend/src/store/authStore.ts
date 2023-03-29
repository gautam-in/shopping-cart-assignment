import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IUser {
  uid: string;
  email: string;
  token: string;
}

export interface AuthStore {
  user: IUser;
  addUser: (userDeails: IUser) => void;
  clerUser: () => void;
  isAuth: () => boolean;
  getUserDetails: () => IUser;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: {
          uid: "",
          email: "",
          token: "",
        },
        getUserDetails: () => {
          return get()?.user;
        },
        addUser: (user: IUser) => {
          set({ user });
        },
        clerUser: () => {
          set({
            user: {
              uid: "",
              email: "",
              token: "",
            },
          });
        },
        isAuth: () => get()?.user?.token !== "",
      }),
      { name: "user" }
    )
  )
);

export default useAuthStore;
