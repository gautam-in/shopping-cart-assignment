import React, { useReducer } from 'react';
import {
    initialState,
    REMOVE_CART_ITEM,
    RESET_CART_ITEM,
    SET_SELECTED_CATEGORY,
    UPDATE_CART_ITEM,
} from '../../constants/actions';
import { Product } from '../../services/AppService';
import AppContext, { SelectedCategory } from './app-context';
import appReducer from './app-reducer';

const AppState = ({ children }) => {
    const [appState, dispatch] = useReducer(appReducer, initialState);

    const updateCart = (item: Product) => {
        dispatch({
            type: UPDATE_CART_ITEM,
            payload: item,
        });
    };

    const removeCart = (item: Product) =>
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: item,
        });

    const resetCart = () =>
        dispatch({
            type: RESET_CART_ITEM,
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
                resetCart,
                setSelectedCategory,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppState;
