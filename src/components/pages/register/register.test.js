
import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Register from './index';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from "@testing-library/user-event";

describe('App', () => {
    const mockStore = configureStore();

    test('Valid <RegisterForm />', async () => {

        let store = mockStore({ loggedIn: false, registeredData: {}});

        let { container } = render(<Provider store={store}>
            <BrowserRouter><Register /></BrowserRouter>
        </Provider>);

        fireEvent.change(screen.getByPlaceholderText('First Name'), {
            target: { value: 'Suresh' },
        });
        fireEvent.change(screen.getByPlaceholderText('Last Name'), {
            target: { value: 'Vakkalakula' },
        });
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'suresh@gmail.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: '12345678' },
        });
        fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
            target: { value: '12345678' },
        });

        const someElement = container.querySelector('#Signup');
        expect(someElement).toBeInTheDocument();
        await act(async () => userEvent.click(someElement));
        expect(screen.queryByText("You have registered successfully!!")).toBeInTheDocument();
    });

    test('InValid <RegisterForm />', async () => {

        let store = mockStore({ loggedIn: false, registeredData: {"suresh@gmail.com": {}} });

        let { container } = render(<Provider store={store}>
            <BrowserRouter><Register /></BrowserRouter>
        </Provider>);

        fireEvent.change(screen.getByPlaceholderText('First Name'), {
            target: { value: 'Suresh' },
        });
        fireEvent.change(screen.getByPlaceholderText('Last Name'), {
            target: { value: 'Vakkalakula' },
        });
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'suresh@gmail.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: '12345678' },
        });
        fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
            target: { value: '12345678' },
        });

        const someElement = container.querySelector('#Signup');
        expect(someElement).toBeInTheDocument();
        await act(async () => userEvent.click(someElement));
        expect(screen.queryByText("User 'suresh@gmail.com' already exists!!")).toBeInTheDocument();
    });
});