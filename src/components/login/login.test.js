import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Login from ".";

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = {}) => {
    const store = mockStore(initialState);
    const wrapper = mount(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>
    );
    return wrapper;
}

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
  

describe("Login component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it("Should render without errors", () => {
        const component = wrapper.find("Login");
        expect(component.length).toBe(1);
    });
    it("Should validate email", () => {
        const emailInput = wrapper.find("Login").find('input[name="email"]');
        emailInput.simulate('change', {target: {name: "email", value: ""}});
        let emailErrorText = wrapper.find("Login").find('[data-test="emailErrorText"]');
        expect(emailErrorText.exists()).toBeTruthy();
        expect(emailErrorText.text()).toBe("Email is a required field.");
        emailInput.simulate('change', {target: {name: "email", value: "test"}});
        emailErrorText = wrapper.find("Login").find('[data-test="emailErrorText"]');
        expect(emailErrorText.text()).toBe("Email invalid.");
        emailInput.simulate('change', {target: {name: "email", value: "test@email.com"}});
        emailErrorText = wrapper.find("Login").find('[data-test="emailErrorText"]');
        expect(emailErrorText.exists()).toBeFalsy();
    });
    it("Should validate password", () => {
        const passwordInput = wrapper.find("Login").find('input[name="password"]');
        passwordInput.simulate('change', {target: {name: "password", value: ""}});
        let passwordErrorText = wrapper.find("Login").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.exists()).toBeTruthy();
        expect(passwordErrorText.text()).toBe("Password is a required field.");
        passwordInput.simulate('change', {target: {name: "password", value: "text"}});
        passwordErrorText = wrapper.find("Login").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.text()).toBe("Password minimum length should be 6 characters.");
        passwordInput.simulate('change', {target: {name: "password", value: "pass word"}});
        passwordErrorText = wrapper.find("Login").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.text()).toBe("Password should not contain space.");
        passwordInput.simulate('change', {target: {name: "password", value: "password"}});
        passwordErrorText = wrapper.find("Login").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.exists()).toBeFalsy();
    });
    it("Should submit form and show errors", () => {
        const form = wrapper.find("Login").find('form');
        form.simulate('submit');
        const emailErrorText = wrapper.find("Login").find('[data-test="emailErrorText"]');
        expect(emailErrorText.exists()).toBeTruthy();
        expect(emailErrorText.text()).toBe("Email is a required field.");
        const passwordErrorText = wrapper.find("Login").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.exists()).toBeTruthy();
        expect(passwordErrorText.text()).toBe("Password is a required field.");
    });
    it("Should submit form without errors", () => {
        const form = wrapper.find("Login").find('form');
        const emailInput = wrapper.find("Login").find('input[name="email"]');
        emailInput.simulate('change', {target: {name: "email", value: "test@email.com"}});
        const passwordInput = wrapper.find("Login").find('input[name="password"]');
        passwordInput.simulate('change', {target: {name: "password", value: "password"}});
        form.simulate('submit');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
})
