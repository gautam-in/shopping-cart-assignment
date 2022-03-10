import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';
import Products from ".";
import categories from './../../../server/categories/index.get.json';
import products from './../../../server/products/index.get.json';
jest.mock('./../cart', () => () =><span>Cart Modal</span>);

const mock = new MockAdapter(axios);

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = {}) => {
    const store = mockStore(initialState);
    const wrapper = mount(
        <Router>
            <Provider store={store}>
                <Products />
            </Provider>
        </Router>
    );
    return wrapper;
}
  

describe("Products component", () => {
    let wrapper;
    beforeAll(async () => {
        await act(async () => {
            await mock.onGet('http://localhost:3000/categories').reply(200, categories);
            await mock.onGet('http://localhost:3000/products').reply(200, products);
            wrapper = setUp();
        });
        wrapper.update();
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    it("Should render without errors", async () => {
        const component = wrapper.find("Products");
        expect(component.length).toBe(1);
    });
    it("Should filter products by category", async () => {
        const component = wrapper.find("Products");
        const categoryListItems = component.find('ListGroupItem [data-test="categoryListItem"]');
        expect(categoryListItems.length).toBe(5);
        categoryListItems.first().simulate('click');
    });
    it("Should add item to cart", () => {
        const component = wrapper.find("Products");
        const addToCartButtons = component.find('[data-test="addToCartButton"]');
        addToCartButtons.first().simulate('click');
    });
});