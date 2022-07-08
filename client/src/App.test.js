import { render, screen } from '@testing-library/react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import App from './App';

test('App spec', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  );
  const linkElement = screen.getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});
