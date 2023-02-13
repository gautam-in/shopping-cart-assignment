/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { StateCreator } from 'zustand';
import { Product } from '../../types/product';

export interface AuthSlice {
  isLoggedIn: boolean;
  user: string;
  login: (user: string) => void;
  register: (user: string) => void;
  logOut: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
  isLoggedIn: false,
  user: '',
  login: (user: string) => {
    set({ isLoggedIn: true, user });
  },
  register: (user: string) => {
    set({ isLoggedIn: true, user });
  },
  logOut: () => {
    set({ isLoggedIn: false, user: '' });
  },
});
