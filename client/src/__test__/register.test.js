import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import Register from "../Components/Register/Register";

const mockStore = configureStore([]);

describe("Register render Page", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            registering: false,
        });
    });

    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );

    it('render 5 input components', () => {
        const { getByLabelText } = render(<Register />, { wrapper: Wrapper });
        expect(getByLabelText(/firstname/i)).toBeInTheDocument();
        expect(getByLabelText(/lastname/i)).toBeInTheDocument();
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/^Password$/i)).toBeInTheDocument();
        expect(getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    it('renders a register button', () => {
        const { getByTestId } = render(<Register />, { wrapper: Wrapper });
        expect(getByTestId("button")).toHaveTextContent(/register/i);
    });
});