import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Cart from ".";

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
                <Cart show={true} />
            </Provider>
        </Router>
    );
    return wrapper;
}
  

describe("Cart component", () => {
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
    it("Should render without errors", async () => {
        const component = wrapper.find("Cart");
        expect(component.length).toBe(1);
    });
    it("Should render cart with 2 items", async () => {
        const component = wrapper.find("Cart");
        const cartItems = wrapper.find('[className="cart-items"]');
        expect(cartItems.length).toBe(2);
    });
    it("Should go to checkout", async () => {
        const component = wrapper.find("Cart");
        const checkoutButton = component.find('Button [data-test="checkoutButton"]');
        checkoutButton.simulate('click');
    });
    it("Should increase price", async () => {
        const component = wrapper.find("Cart");
        const plusButton = component.find('Button [data-test="plusButton"]');
        plusButton.first().simulate('click');
    });
    it("Should decrease price", async () => {
        const component = wrapper.find("Cart");
        const minusButton = component.find('Button [data-test="minusButton"]');
        minusButton.first().simulate('click');
    });
    it("Should decrease price and remove product from cart", async () => {
        const component = wrapper.find("Cart");
        const minusButton = component.find('Button [data-test="minusButton"]');
        minusButton.last().simulate('click');
    });
});