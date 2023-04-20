import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import storeData from '../store/store';

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = storeData,
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    store.dispatch = jest.fn();

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}