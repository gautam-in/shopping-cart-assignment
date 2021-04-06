/* eslint-disable no-undef */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { SignUp } from '.';

console.log(SignUp);
function mockFunction() {
  const original = jest.requireActual('react-router');
  return {
    ...original,
    useHistory: () => ({
      push: jest.fn(),
      location: {
        pathname: '/sign-up',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
      },
    }),
  };
}

jest.mock('react-router', () => mockFunction());
describe('SignUp form ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<SignUp />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('Signup form validation test', async () => {
    const {
      getByPlaceholderText, getByLabelText, getByText, getByTestId,
    } = wrapper;

    await act(async () => {
      fireEvent.change(getByLabelText(/email/i), {
        target: { value: '' },
      });

      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: '' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(getByText('Please enter the first name.')).toBeInTheDocument();
    expect(getByText('Please enter the last name.')).toBeInTheDocument();
    expect(getByText('Please enter the email.')).toBeInTheDocument();
    expect(getByText('Please enter the password.')).toBeInTheDocument();
    expect(getByText('Please confirm the password.')).toBeInTheDocument();
  });
});
