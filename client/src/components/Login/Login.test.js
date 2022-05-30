import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render,cleanup } from "@testing-library/react"
import * as React from "react";
// for store wrapping needed
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import Login from './Login';
import {Router} from 'react-router-dom';

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
                    {/* <Router> */}
                    <Login history={history} />
                    {/* </Router> */}
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
        const { input1, input2, getByText } = setup();
        fireEvent.change(input1, { target: { value: 'adarsh@gmail.com' } });
        expect(input1.value).toBe('adarsh@gmail.com');
    //   const { getByTestId } = render(<Login />);
  
    //   const email = getByTestId("email");
    //   const password = getByTestId("password");

    });
})