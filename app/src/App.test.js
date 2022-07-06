import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

test('App test', () => {
  render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
 
});
