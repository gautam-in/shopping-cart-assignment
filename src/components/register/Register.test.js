import { fireEvent } from "@testing-library/react";
import { Route } from "react-router-dom";
import { customRender } from "../../utils/customMockRender";
import Register from "./Register";

describe('register screen is rendered', () => {
    let container = null;

    beforeEach(() => {
      container = customRender(
        <Route path="/">
          <Register />
        </Route>,
        {
          route: '/',
        }
      );
    })

    test('all input fields are rendered', () => {
      const { getByText, getByLabelText, getAllByLabelText } = container;
      expect(getByLabelText(/first name/i)).toBeInTheDocument();
      expect(getByLabelText(/last name/i)).toBeInTheDocument();
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getAllByLabelText(/password/i)[0]).toBeInTheDocument();
      expect(getByLabelText(/confirm password/i)).toBeInTheDocument();
      expect(getByText(/Sign In/i)).toBeInTheDocument();
    })

    test('correct error message is rendered', () => {
      const { getByText, getByLabelText, getAllByLabelText } = container;
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Mandatory field missing or invalid/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'some password' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'some password' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Email invalid, must have @ and dot/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'somepassword' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'somepassword' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Password does not meet minimum requirements - password must have minimum length 6 characters, must have a number and alphabet/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'Somepassword12' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'somepassword' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Confirm Password and Password value mismatch/i)).toBeInTheDocument();
    })
  })