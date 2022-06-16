import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, cleanup } from "@testing-library/react"
import * as React from "react";
// for store wrapping needed
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import Footer from './Footer';

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
                    <Footer history={history} />
                    </BrowserRouter>
                </Provider>
            );
            return {
                ...utils,
            }
        }
        const { getByTestId } = setup();
        /** validating simple text present in dom */
        expect(getByTestId('footer-text')).toHaveTextContent('Copvright © 2011-2018 Sabka Bazaar Grocery Supplies Put Ltd');
    });
})