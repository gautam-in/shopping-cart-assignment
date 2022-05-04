import { createContext } from 'react';

export interface ProductItem {
    name: string,
    imageURL: string,
    description: string,
    price: number,
    stock: number,
    category: string,
    sku: string,
    id: string,
    qty: number,
}

export type SelectedCategory = string | null;

export interface AppState {
    cartCount: number,
    cartItems: ProductItem[],
    selectedCategory: SelectedCategory,
}

export interface AppContextProps {
    appState: AppState;
    updateCart: (item: ProductItem) => void;
    removeCart: (item: ProductItem) => void;
    setSelectedCategory: (selectedCategory: SelectedCategory) => void;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
