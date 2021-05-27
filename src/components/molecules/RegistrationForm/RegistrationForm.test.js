import React from 'react';
import { render, shallow } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationForm from './RegistrationForm';

test('should test Signinform component', () => {
  const wrpper = render(<RegistrationForm />);
  expect(wrpper).toMatchSnapshot();
});

it('render 5 input components', () => {
  const { getByLabelText } = render(<RegistrationForm />);
  expect(getByLabelText(/first name/i)).toBeInTheDocument();
  expect(getByLabelText(/last name/i)).toBeInTheDocument();
  expect(getByLabelText(/email/i)).toBeInTheDocument();
  expect(getByLabelText(/^password$/i)).toBeInTheDocument();
  expect(getByLabelText(/confirm Password/i)).toBeInTheDocument();
});
