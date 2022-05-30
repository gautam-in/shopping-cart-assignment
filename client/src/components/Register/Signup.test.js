import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, cleanup } from "@testing-library/react"
import * as React from "react";
// for store wrapping needed
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import SignUp from './Signup';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("account delete form", () => {
    it("renders default state", () => {
        const history = {
            push: function () {
                return '/login';
            }
        };

        const setup = () => {
            const utils = render(
                <Provider store={store}>
                    <SignUp history={history} />
                </Provider>
            );
            const input1 = utils.getByTestId('firstname');
            const input2 = utils.getByTestId('lastname');
            const input3 = utils.getByTestId('email');
            const input4 = utils.getByTestId('password');
            const input5 = utils.getByTestId('confirmPassword');
            return {
                input1,
                input2,
                input3,
                input4,
                input5,
                ...utils,
            }
        }
        const { input1, input2,input3,input4,input5, getByTestId } = setup();
        fireEvent.change(input1, { target: { value: 'adarsh' } });
        expect(input1.value).toBe('adarsh');
        fireEvent.change(input2, { target: { value: 'kumar' } });
        expect(input2.value).toBe('kumar');
        fireEvent.change(input3, { target: { value: 'adarsh@kumar.com' } });
        expect(input3.value).toBe('adarsh@kumar.com');
        fireEvent.change(input4, { target: { value: 'adarsh1' } });
        expect(input4.value).toBe('adarsh1');
        fireEvent.change(input5, { target: { value: 'adarsh1' } });
        expect(input5.value).toBe('adarsh1');
        let showText = '';
        expect(input5.value).toBe(input4.value);
        showText = "Confirm password should match password";
        expect(showText).toBe('Confirm password should match password');

          // check button clicked
          let arr = [{
            id: 'email',
            label: 'Email',
            error: false,
            regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            value:"abhijeet@gmail.com"
            // helperText: "please enter valid email"
        }]
        fireEvent.click(getByTestId('signup-submit'), arr.push({
            id: 'password',
            label: 'Password',
            error: false,
            regex: /[0-9a-zA-Z]{6,}/,
            helperText: "please enter valid password",
            value:"abhije"
        }));
        expect(arr.length).toBe(2);
        expect(history.push()).toBe('/login');
    });
})