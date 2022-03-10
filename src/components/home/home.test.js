import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';
import Home from ".";
import categories from '../../../server/categories/index.get.json';
import banners from '../../../server/banners/index.get.json';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
const mock = new MockAdapter(axios);

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = {}) => {
    const store = mockStore(initialState);
    const wrapper = mount(
        <Router>
            <Provider store={store}>
                <Home />
            </Provider>
        </Router>
    );
    return wrapper;
}
  

describe("Home component", () => {
    let wrapper;
    beforeAll(async () => {
        await act(async () => {
            await mock.onGet('http://localhost:3000/categories').reply(200, categories);
            await mock.onGet('http://localhost:3000/banners').reply(200, banners);
            wrapper = setUp();
        });
        wrapper.update();
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    it("Should render without errors", async () => {
        const component = wrapper.find("Home");
        expect(component.length).toBe(1);
    });
    it("Should filter products by category", async () => {
        const component = wrapper.find("Home");
        const categoryListItems = component.find('Button [data-test="categoryButton"]');
        expect(categoryListItems.length).toBe(5);
        categoryListItems.first().simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
});