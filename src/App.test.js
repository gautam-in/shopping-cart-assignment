import React from "react"

import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ProductsProvider } from "./context/productContext"
import "@testing-library/jest-dom";

test('renders app', async() => {
  render(<Router><ProductsProvider><App /></ProductsProvider></Router>);
  expect(await screen.findByTestId("app")).toBeInTheDocument()
});
