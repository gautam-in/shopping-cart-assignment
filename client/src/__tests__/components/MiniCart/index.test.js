import { render, screen } from '@testing-library/react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {MiniCart} from '../../../components/MiniCart'

test('MiniCart spec', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
  <MiniCart />
  </BrowserRouter>
  </Provider>
  );
  const linkElement = screen.getByText(/Start Shopping/i);
  expect(linkElement).toBeInTheDocument();
});