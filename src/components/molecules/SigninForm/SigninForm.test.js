import React from 'react';
import { render, shallow } from '@testing-library/react';
import '@testing-library/jest-dom';
import SigninForm from './SigninForm';

test('should test Signinform component', () => {
  const wrpper = render(<SigninForm />);
  expect(wrpper).toMatchSnapshot();
});

it('render 2 input components', () => {
  const { getByLabelText } = render(<SigninForm />);
  expect(getByLabelText(/email/i)).toBeInTheDocument();
  expect(getByLabelText(/password/i)).toBeInTheDocument();
});
