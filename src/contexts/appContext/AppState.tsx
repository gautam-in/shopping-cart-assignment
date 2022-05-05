import React, { useReducer } from 'react';
import { initialState, REMOVE_CART_ITEM, SET_SELECTED_CATEGORY, UPDATE_CART_ITEM } from '../../constants/actions';
import AppContext, { CartItem, SelectedCategory } from './app-context';
import appReducer from './app-reducer';

const AppState = ({ children }) => {
    const [appState, dispatch] = useReducer(appReducer, initialState);

    const updateCart = (item: CartItem) => {
        dispatch({
            type: UPDATE_CART_ITEM,
            payload: item,
        });
    };

    const removeCart = (item: CartItem) =>
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: item,
        });

    const setSelectedCategory = (selectedCategory: SelectedCategory) => {
        dispatch({
            type: SET_SELECTED_CATEGORY,
            payload: selectedCategory,
        });
    };

    return (
        <AppContext.Provider
            value={{
                appState,
                updateCart,
                removeCart,
                setSelectedCategory,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppState;
