import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, cleanup } from "@testing-library/react"
import * as React from "react";
// for store wrapping needed
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import Login from './Login';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("account delete form", () => {
    it("renders default state", () => {
        const history = {
            push: function () {
                return '/';
            }
        };

        const setup = () => {
            const utils = render(
                <Provider store={store}>
                    <Login history={history} />
                </Provider>
            );
            const input1 = utils.getByTestId('email');
            const input2 = utils.getByTestId('password');
            return {
                input1,
                input2,
                ...utils,
            }
        }
        const { input1, input2, getByTestId } = setup();
        /** validating simple text present in dom */
        expect(getByTestId('login-text')).toHaveTextContent('Login');
        expect(getByTestId('login-wishlist')).toHaveTextContent('Get access to your Orders, Wishlist and Recommendations');

        /** onchange of textfield */
        let loginData = [];
        fireEvent.change(input1, { target: { value: 'adarsh@gmail.com' } });
        expect(input1.value).toBe('adarsh@gmail.com');
        loginData.push({
            id: 'email',
            label: 'Email',
            value:input1.value,
            error: false,
            regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            helperText: "please enter valid email"
        })
        fireEvent.change(input2, { target: { value: 'abhkumar' } });
        expect(input2.value).toBe('abhkumar');
        loginData.push({
            id: 'email',
            label: 'Email',
            value:input2.value,
            error: false,
            regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            helperText: "please enter valid email"
        })
        expect(loginData.length).toBe(2);

        // check button clicked
        let arr = [{
            id: 'email',
            label: 'Email',
            error: false,
            regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            value: "abhijeet@gmail.com"
            // helperText: "please enter valid email"
        }]
        fireEvent.click(getByTestId('login-submit'), arr.push({
            id: 'password',
            label: 'Password',
            error: false,
            regex: /[0-9a-zA-Z]{6,}/,
            helperText: "please enter valid password",
            value: "abhije"
        }));
        expect(arr.length).toBe(2);
        expect(history.push()).toBe('/');
    });
})