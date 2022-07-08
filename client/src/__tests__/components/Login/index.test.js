import * as React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../../../components/Login'
describe('Login spec', () => {

  test('Login render without crash', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getAllByText(/Login/i);
    expect(linkElement.at(0)).toBeInTheDocument();
  });

  test('Login event password change',  () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId("login-password-test").querySelector('input')
      , { target: { value: 'abc123' } });
  })

  test('Login event state change', async () => {
    
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

      fireEvent.click(screen.getByTestId('login-button-test'));
      fireEvent.click(screen.getByTestId('show-password-login'));
      fireEvent.mouseDown(screen.getByTestId('show-password-login'));
      fireEvent.click(screen.getByTestId('create-new-button-test'));

  })

  test('Login event email & password validate', async () => {
    React.useState = jest.fn()
      .mockReturnValueOnce([
        {
          email: 'vik@gmail.com',
          password: 'amar1234',
          showPassword: false
        }
        , {}])
    jest.spyOn(React, "useState");
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('login-button-test'));
    })
  })

})