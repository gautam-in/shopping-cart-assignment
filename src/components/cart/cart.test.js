import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Cart, { extractTotalPrice } from './Cart';
import { ProductsProvider } from '../../context/productContext';

describe("should return the sum of the cart values", () => {
    test("should return total sum of cart values", () => {
        const cartArray = [{price: 100, quantity: 1}, {price: 200, quantity: 2}]
        const cartValue  = extractTotalPrice(cartArray)
        expect(cartValue).toBe(500)
    })
})
describe("test cart for UI",  () => {
    test("should have header, clos button, proceed to checkout button, promo text", async () => {
        render(<BrowserRouter><ProductsProvider><Cart /></ProductsProvider></BrowserRouter>)

        expect(screen.getByText("My Cart")).toBeInTheDocument()
        expect(screen.getByText("You won't find it cheaper anywhere")).toBeInTheDocument()
        expect(screen.getByText("Promo code can be applied on payment page")).toBeInTheDocument()
        expect(screen.getByText("Proceed to Checkout")).toBeInTheDocument() 
    })
    test("cart page should be in the document", async () => {
        render(<BrowserRouter><ProductsProvider><Cart /></ProductsProvider></BrowserRouter>)

        expect(await screen.findByTestId("cart-page")).toBeInTheDocument()
    })
})