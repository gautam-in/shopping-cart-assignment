
import React from "react"
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom"
import { ProductsProvider } from "./../../context/productContext"
import "@testing-library/jest-dom";
import Footer from './Footer';

test('should render footer component', async() => {
    render(<Router><ProductsProvider><Footer /></ProductsProvider></Router>);
    expect(await screen.findByTestId("footer")).toMatchSnapshot()
  });