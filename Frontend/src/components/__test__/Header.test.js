import {BrowserRouter} from 'react-router-dom';
import {cleanup, screen} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import userEvent from '@testing-library/user-event';
import {render} from '../../test-utils/wrapper';
import Header from '../Header';

afterEach(() => {
  cleanup();
});
test('render Header initial condition', async () => {
  const cartSideNav = jest.fn(() => false);
  render(
    <BrowserRouter>
      <Header cartSideNav={cartSideNav} />
    </BrowserRouter>,
  );
  const LogoImage = await screen.findByRole('img', {
    name: /logo$/i,
  });
  expect(LogoImage).toBeInTheDocument();

  expect(screen.getByRole('link', {name: /home/i})).toHaveAttribute(
    'href',
    '/',
  );
  expect(screen.getByRole('link', {name: /products/i})).toHaveAttribute(
    'href',
    '/products',
  );
  expect(screen.getByRole('link', {name: /signin/i})).toHaveAttribute(
    'href',
    '/login',
  );
  expect(screen.getByRole('link', {name: /register/i})).toHaveAttribute(
    'href',
    '/signup',
  );

  const cartBtn = screen.getByTestId('cart-btn');
  expect(cartBtn).toBeInTheDocument();
  expect(cartBtn).toHaveTextContent(/0 items/i);
  userEvent.click(cartBtn);
  expect(cartSideNav).toBeCalled();
});
