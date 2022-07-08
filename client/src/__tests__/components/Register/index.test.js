import * as React from 'react';
import { render, screen , fireEvent, waitFor} from '@testing-library/react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../../../components/Register'

describe('Register spec', () => {
  test('Register render without crash', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getAllByText(/Signup/);
    expect(linkElement.at(0)).toBeInTheDocument();
  });

  test('Register event', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId("signup-password-test").querySelector('input')
    ,{target:{value:'abc123'}});
  })

  test('Register event', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId("signup-confirm-password-test").querySelector('input')
    ,{target:{value:'abc123'}});
  })

  test('Register event', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId('signup-button-test'));
    fireEvent.click(screen.getAllByTestId('show-password-signup').at(0));
    fireEvent.mouseDown(screen.getAllByTestId('show-password-signup').at(0));
  })

  test('Signup event email & password validate', async () => {
    React.useState = jest.fn()
      .mockReturnValueOnce([
        {
          firstName: 'johny',
          lastName: 'walker',
          email: 'johny@gmail.com',
          password: 'abcd1234',
          confirmPassword: 'abcd1234',
          showPassword: true,
          showConfirmPassword: true
        }
        , {}])
    jest.spyOn(React, "useState");
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('signup-button-test'));
    })
  })

})