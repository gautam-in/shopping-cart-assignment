/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartSlice, createCartSlice } from './slices/createCartSlice';
import { AuthSlice, createAuthSlice } from './slices/createAuthSlice';

type StoreState = AuthSlice & CartSlice;

const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createCartSlice(...a),
    }),
    {
      name: 'store',
    },
  ),
);

export default useAppStore;
