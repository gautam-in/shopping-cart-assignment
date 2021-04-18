import {BrowserRouter} from 'react-router-dom';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import {render} from '../../../test-utils/wrapper';
import Signup from '../Signup';

test('should display matching error when signup form is invalid', async () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>,
  );
  userEvent.type(screen.getByRole('textbox', {name: /enter first name/i}), '1');
  userEvent.type(screen.getByRole('textbox', {name: /enter last name/i}), '2');

  userEvent.type(
    screen.getByRole('textbox', {name: /enter email id/i}),
    'test',
  );
  const passwordTextboxes = screen.getAllByLabelText(/password/i);
  userEvent.type(passwordTextboxes[0], 'test');
  userEvent.type(passwordTextboxes[1], 'test123');

  expect(await screen.findAllByRole('alert')).toHaveLength(5);

  const signupButton = screen.getByRole('button', {name: /signup/i});
  expect(signupButton).toBeDisabled();
});

test('should not display error when value is valid', async () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>,
  );

  userEvent.type(
    screen.getByRole('textbox', {name: /enter first name/i}),
    'test',
  );
  userEvent.type(
    screen.getByRole('textbox', {name: /enter last name/i}),
    'test',
  );

  userEvent.type(
    screen.getByRole('textbox', {name: /enter email id/i}),
    'test@test.test',
  );

  const passwordTextboxes = screen.getAllByLabelText(/password/i);
  userEvent.type(passwordTextboxes[0], 'test123');
  userEvent.type(passwordTextboxes[1], 'test123');

  await waitFor(() =>
    expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
  );

  const signupButton = screen.getByRole('button');
  expect(signupButton).toBeInTheDocument();

  userEvent.click(signupButton);

  await waitFor(() =>
    expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
  );
});
