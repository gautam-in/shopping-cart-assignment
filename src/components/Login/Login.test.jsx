/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import Login from '.';

afterEach(() => {
  jest.clearAllMocks();
});
describe('Login form ', () => {
  it('should render correclty', () => {
    const wrappper = shallow(<Login />);
    expect(wrappper).toMatchSnapshot();
  });

  it('should render h2 heading as Login', () => {
    const { container, getByTestId } = render(<Login />);
    expect(getByTestId('login')).toBeInTheDocument();
    expect(container.getElementsByTagName('h2').item(0).innerHTML).toEqual('Login');
  });
});

describe('Login form validation test', () => {
  let getByTestId;
  let getByText;
  beforeEach(() => {
    const lognform = render(<Login />);
    getByTestId = lognform.getByTestId;
    getByText = lognform.getByText;
  });
  it('validation blank check ', async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: '' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(getByText('Please enter the email.')).toBeInTheDocument();
    expect(getByText('Please enter the password.')).toBeInTheDocument();
  });

  it('validation invalid check ', async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'email' },
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: 'abcd' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(getByText('Invalid Email')).toBeInTheDocument();
    expect(getByText('Invalid password.')).toBeInTheDocument();
  });
});
