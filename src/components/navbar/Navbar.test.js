import { Navbar } from "../index-components"
import { render, screen } from '@testing-library/react';
import {  ProductsProvider, ProductsContext } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter, history } from 'react-router-dom';
import  userEvent  from '@testing-library/user-event';

describe("test navbar component", () => {
    test("should render logo, links on UI", () => {
        render(<BrowserRouter><ProductsProvider><Navbar /></ProductsProvider></BrowserRouter>)
        expect(screen.getByAltText("sabka bazar logo")).toHaveAttribute("src", "logo.png")
    })
    test("should have home, products, signin, register, cart links", async() => {

    render(<BrowserRouter><ProductsProvider><Navbar /></ProductsProvider></BrowserRouter>)
    expect(screen.getByRole("link", {name:"Home"})).toHaveAttribute("href", "/")
        expect(screen.getByRole("link", {name:"Products"})).toHaveAttribute("href", "/products")
        expect(screen.getByRole("link", {name:"SignIn"})).toHaveAttribute("href", "/login")
        expect(screen.getByRole("link", {name:"Register"})).toHaveAttribute("href", "/signup")
        const cartLink = screen.getByTestId("cart-link")
        await userEvent.click(cartLink)

    })
})