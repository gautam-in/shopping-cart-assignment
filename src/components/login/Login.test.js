import { fireEvent } from "@testing-library/react";
import { Route } from "react-router-dom";
import { customRender } from "../../utils/customMockRender";
import Login from "./Login";

describe('login screen is rendered', () => {
    let container = null;

    beforeEach(() => {
      container = customRender(
        <Route path="/">
          <Login />
        </Route>,
        {
          route: '/',
        }
      );
    })

    test('email and password input is rendered on screen with sign in button', () => {
      const { getByText, getByLabelText } = container;
      expect(getByText(/Get access to your Orders, Wishlist and Recommendations/i)).toBeInTheDocument();
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getByLabelText(/password/i)).toBeInTheDocument();
      expect(getByText(/Sign In/i)).toBeInTheDocument();
    })

    test('Onchange for email works as expected', () => {
      const { getByText, getByLabelText } = container;
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } });
      fireEvent.change(getByLabelText(/password/i), { target: { value: 'somepassword' } });
      expect(getByLabelText(/email/i).value).toBe('manav.jethani@gmail.com');
      expect(getByLabelText(/password/i).value).toBe('somepassword');
    })
  })