import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, cleanup } from "@testing-library/react"
import * as React from "react";
// for store wrapping needed
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import Header from './Header';

const thunk =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }

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
                    <BrowserRouter>
                    <Header history={history} />
                    </BrowserRouter>
                </Provider>
            );
            return {
                ...utils,
            }
        }
        const { getByTestId } = setup();
        /** validating simple text present in dom */
        expect(getByTestId('header-home')).toHaveTextContent('Home');
        expect(getByTestId('header-products')).toHaveTextContent('Products');
        expect(getByTestId('header-signIn')).toHaveTextContent('Sign In');
        expect(getByTestId('header-register')).toHaveTextContent('Register');
        expect(getByTestId('header-items')).toHaveTextContent('items');
    });
    // it('passes dispatch and getState', () => {
    //     const history = {
    //         push: function () {
    //             return '/';
    //         }
    //     };

    //     const setup = () => {
    //         const utils = render(
    //             <Provider store={store}>
    //                 <BrowserRouter>
    //                 <Header history={history} />
    //                 </BrowserRouter>
    //             </Provider>
    //         );
    //         return {
    //             ...utils,
    //         }
    //     }
    //     const { getByTestId } = setup();
    //      // check button clicked
    //      let arr = [{
    //         id: 'email',
    //         label: 'Email',
    //         error: false,
    //         regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    //         value: "abhijeet@gmail.com"
    //         // helperText: "please enter valid email"
    //     }]
    //     fireEvent.click(getByTestId('header-cartimg'), arr.push({
    //         id: 'password',
    //         label: 'Password',
    //         error: false,
    //         regex: /[0-9a-zA-Z]{6,}/,
    //         helperText: "please enter valid password",
    //         value: "abhije"
    //     }));
    //     expect(arr.length).toBe(2);
       
    //     // const { store, invoke } = create()
    //     // invoke((dispatch, getState) => {
    //     //   dispatch('TEST DISPATCH')
    //     // //   getState()
    //     // })
    //     // expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    //     // expect(store.getState).toHaveBeenCalled()
    //   })
      
      
})