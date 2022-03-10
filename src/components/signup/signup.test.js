import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Signup from ".";

const mockStore = configureMockStore([thunk]);
const setUp = (initialState = {}) => {
    const store = mockStore(initialState);
    const wrapper = mount(
        <Router>
            <Provider store={store}>
                <Signup />
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
  

describe("Signup component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it("Should render without errors", () => {
        const component = wrapper.find("Signup");
        expect(component.length).toBe(1);
    });
    it("Should validate First name", () => {
        const firstNameInput = wrapper.find("Signup").find('input[name="firstName"]');
        firstNameInput.simulate('change', {target: {name: "firstName", value: ""}});
        const firstNameError = wrapper.find("Signup").find('[data-test="firstNameError"]');
        expect(firstNameError.exists()).toBeTruthy();
        expect(firstNameError.text()).toBe("First name is a required field.");
        firstNameInput.simulate('change', {target: {name: "firstName", value: "test"}});
        const firstNameRequiredValid = wrapper.find("Signup").find('[data-test="firstNameError"]');
        expect(firstNameRequiredValid.exists()).toBeFalsy();
    });
    it("Should validate Last name", () => {
        const lastNameInput = wrapper.find("Signup").find('input[name="lastName"]');
        lastNameInput.simulate('change', {target: {name: "lastName", value: ""}});
        const lastNameError = wrapper.find("Signup").find('[data-test="lastNameError"]');
        expect(lastNameError.exists()).toBeTruthy();
        expect(lastNameError.text()).toBe("Last name is a required field.");
        lastNameInput.simulate('change', {target: {name: "lastName", value: "test"}});
        const lastNameRequiredValid = wrapper.find("Signup").find('[data-test="lastNameError"]');
        expect(lastNameRequiredValid.exists()).toBeFalsy();
    });
    it("Should validate email", () => {
        const emailInput = wrapper.find("Signup").find('input[name="email"]');
        emailInput.simulate('change', {target: {name: "email", value: ""}});
        let emailErrorText = wrapper.find("Signup").find('[data-test="emailErrorText"]');
        expect(emailErrorText.exists()).toBeTruthy();
        expect(emailErrorText.text()).toBe("Email is a required field.");
        emailInput.simulate('change', {target: {name: "email", value: "test"}});
        emailErrorText = wrapper.find("Signup").find('[data-test="emailErrorText"]');
        expect(emailErrorText.text()).toBe("Email invalid.");
        emailInput.simulate('change', {target: {name: "email", value: "test@email.com"}});
        emailErrorText = wrapper.find("Signup").find('[data-test="emailErrorText"]');
        expect(emailErrorText.exists()).toBeFalsy();
    });
    it("Should validate password", () => {
        const passwordInput = wrapper.find("Signup").find('input[name="password"]');
        passwordInput.simulate('change', {target: {name: "password", value: ""}});
        let passwordErrorText = wrapper.find("Signup").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.exists()).toBeTruthy();
        expect(passwordErrorText.text()).toBe("Password is a required field.");
        passwordInput.simulate('change', {target: {name: "password", value: "text"}});
        passwordErrorText = wrapper.find("Signup").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.text()).toBe("Password minimum length should be 6 characters.");
        passwordInput.simulate('change', {target: {name: "password", value: "pass word"}});
        passwordErrorText = wrapper.find("Signup").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.text()).toBe("Password should not contain space.");
        passwordInput.simulate('change', {target: {name: "password", value: "password"}});
        passwordErrorText = wrapper.find("Signup").find('[data-test="passwordErrorText"]');
        expect(passwordErrorText.exists()).toBeFalsy();
    });
    it("Should validate confirm password", () => {
        const confirmPasswordInput = wrapper.find("Signup").find('input[name="confirmPassword"]');
        confirmPasswordInput.simulate('change', {target: {name: "confirmPassword", value: ""}});
        const confirmPasswordError = wrapper.find("Signup").find('[data-test="confirmPasswordError"]');
        expect(confirmPasswordError.exists()).toBeTruthy();
        expect(confirmPasswordError.text()).toBe("Confirm password is a required field.");
        confirmPasswordInput.simulate('change', {target: {name: "confirmPassword", value: "confirmPassword"}});
        const confirmPasswordRequiredValid = wrapper.find("Signup").find('[data-test="confirmPasswordError"]');
        expect(confirmPasswordRequiredValid.exists()).toBeFalsy();
        const passwordInput = wrapper.find("Signup").find('input[name="password"]');
        passwordInput.simulate('change', {target: {name: "password", value: "password"}});
        const confirmPasswordError2 = wrapper.find("Signup").find('[data-test="confirmPasswordError2"]');
        expect(confirmPasswordError2.exists()).toBeTruthy();
        expect(confirmPasswordError2.text()).toBe("Password and Confirm Password does not match.");
        confirmPasswordInput.simulate('change', {target: {name: "confirmPassword", value: "password"}});
        expect(wrapper.find("Signup").find('[data-test="confirmPasswordError2"]').exists()).toBeFalsy();
    });
    it("Should submit form and show errors", () => {
        const form = wrapper.find("Signup").find('form');
        form.simulate('submit');
        const firstNameError = wrapper.find("Signup").find('[data-test="firstNameError"]');
        expect(firstNameError.exists()).toBeTruthy();
        expect(firstNameError.text()).toBe("First name is a required field.");
        const lastNameError = wrapper.find("Signup").find('[data-test="lastNameError"]');
        expect(lastNameError.exists()).toBeTruthy();
        expect(lastNameError.text()).toBe("Last name is a required field.");
        const emailError = wrapper.find("Signup").find('[data-test="emailErrorText"]');
        expect(emailError.exists()).toBeTruthy();
        expect(emailError.text()).toBe("Email is a required field.");
        const passwordError = wrapper.find("Signup").find('[data-test="passwordErrorText"]');
        expect(passwordError.exists()).toBeTruthy();
        expect(passwordError.text()).toBe("Password is a required field.");
        const confirmPasswordError = wrapper.find("Signup").find('[data-test="confirmPasswordError"]');
        expect(confirmPasswordError.exists()).toBeTruthy();
        expect(confirmPasswordError.text()).toBe("Confirm password is a required field.");
    });
    it("Should submit form without errors", () => {
        const form = wrapper.find("Signup").find('form');
        const firstNameInput = wrapper.find("Signup").find('input[name="firstName"]');
        firstNameInput.simulate('change', {target: {name: "firstName", value: "first"}});
        const lastNameInput = wrapper.find("Signup").find('input[name="lastName"]');
        lastNameInput.simulate('change', {target: {name: "lastName", value: "last"}});
        const emailInput = wrapper.find("Signup").find('input[name="email"]');
        emailInput.simulate('change', {target: {name: "email", value: "test@email.com"}});
        const passwordInput = wrapper.find("Signup").find('input[name="password"]');
        passwordInput.simulate('change', {target: {name: "password", value: "password"}});
        const confirmPasswordInput = wrapper.find("Signup").find('input[name="confirmPassword"]');
        confirmPasswordInput.simulate('change', {target: {name: "confirmPassword", value: "password"}});
        form.simulate('submit');
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
})
