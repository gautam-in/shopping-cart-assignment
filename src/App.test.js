import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ProductsProvider } from "./context/productContext"
test('renders learn react link', () => {
  render(<Router><ProductsProvider><App /></ProductsProvider></Router>);

});
