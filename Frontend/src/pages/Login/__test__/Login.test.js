import {BrowserRouter} from 'react-router-dom';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import {render} from '../../../test-utils/wrapper';
import Login from '../Login';

test('should display matching error when Login form is invalid', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );

  userEvent.type(
    screen.getByRole('textbox', {name: /enter email id/i}),
    'test',
  );

  userEvent.type(screen.getByLabelText(/password/i), 'test');

  expect(await screen.findAllByRole('alert')).toHaveLength(2);

  const loginButton = screen.getByRole('button', {name: /login/i});
  expect(loginButton).toBeDisabled();
});

test('should not display error when value is valid', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );

  userEvent.type(
    screen.getByRole('textbox', {name: /enter email id/i}),
    'test@test.test',
  );

  userEvent.type(screen.getByLabelText(/password/i), 'password');

  await waitFor(() =>
    expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
  );

  const loginButton = screen.getByRole('button', {name: /login/i});
  expect(loginButton).toBeEnabled();

  userEvent.click(screen.getByRole('button'));

  await waitFor(() =>
    expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
  );
});
