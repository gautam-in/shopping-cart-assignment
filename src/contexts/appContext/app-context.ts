import { createContext } from 'react';
import { Product } from '../../services/AppService';

export interface CartItem extends Product{
    qty: number,
}

export type SelectedCategory = string | null;

export interface AppState {
    cartCount: number,
    cartItems: CartItem[],
    selectedCategory: SelectedCategory,
}

export interface AppContextProps {
    appState: AppState;
    updateCart: (item: CartItem) => void;
    removeCart: (item: CartItem) => void;
    setSelectedCategory: (selectedCategory: SelectedCategory) => void;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
