import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Login } from "../Login";
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("Login render Page", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            loggingIn: false,
            loggedIn: false
        });
    });

    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );

    it('render 2 input components', () => {
        const { getByLabelText } = render(<Login />, { wrapper: Wrapper });
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('renders a login button', () => {
        const { getByTestId } = render(<Login />, { wrapper: Wrapper });
        expect(getByTestId("button")).toHaveTextContent("Login");
    });
});

