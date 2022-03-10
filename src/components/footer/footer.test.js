import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Footer from ".";

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
                <Footer />
            </Provider>
        </Router>
    );
    return wrapper;
}
  

describe("Footer component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it("Should render without errors", async () => {
        const component = wrapper.find("Footer");
        expect(component.length).toBe(1);
    });
});