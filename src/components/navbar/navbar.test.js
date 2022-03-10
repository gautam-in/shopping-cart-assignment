import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Navbar from ".";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
const mock = new MockAdapter(axios);

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = {cart: []}) => {
    const store = mockStore(initialState);
    const wrapper = mount(
        <Router>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </Router>
    );
    return wrapper;
}
  

describe("Navbar component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it("Should render without errors", async () => {
        const component = wrapper.find("Navbar");
        expect(component.length).toBe(1);
    });
    it("Should go to home", async () => {
        const component = wrapper.find("Navbar");
        const homeButton = component.find('[data-test="homeButton"]');
        homeButton.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
    it("Should go to products", async () => {
        const component = wrapper.find("Navbar");
        const productsButton = component.find('[data-test="productsButton"]');
        productsButton.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
    it("Should go to signin", async () => {
        const component = wrapper.find("Navbar");
        const signinButton = component.find('[data-test="signinButton"]');
        signinButton.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
    it("Should go to signup", async () => {
        const component = wrapper.find("Navbar");
        const signupButton = component.find('[data-test="signupButton"]');
        signupButton.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
    it("Should go to cart", async () => {
        const component = wrapper.find("Navbar");
        const cartButton = component.find('[data-test="cartButton"]');
        cartButton.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
});

describe("Navbar component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp({cart: [{
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883",
            "quantity": 2 
          },
          {
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884",
            "quantity": 1
          }]});
    });
    it("Should render with 2 items in cart", async () => {
        const component = wrapper.find("Navbar");
        const cartText = component.find('[className="cart-count"]')
        expect(cartText.text()).toBe("2 items");
    });
});