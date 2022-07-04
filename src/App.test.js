import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ProductsProvider } from "./context/productContext"
test('renders learn react link', () => {
  render(<Router><ProductsProvider><App /></ProductsProvider></Router>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
