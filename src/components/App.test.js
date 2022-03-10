import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import App from "./App";

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = { products: [] }) => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
          <App />
      </Provider>
    );
    return wrapper;
} 

describe("App component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it("Should render without errors", () => {
        const component = wrapper.find("App");
        expect(component.length).toBe(1);
    });
})
