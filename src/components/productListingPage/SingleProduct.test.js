import { SingleProduct } from "../index-components"
import { render, screen } from '@testing-library/react';
import { ProductsProvider, ProductsContext } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import  userEvent  from '@testing-library/user-event';
import React from "react"

describe("test single product component", () => {
    test("should render all the product elements", async () => {
        const product = {category: "5b6899683d1a866534f516e0",
        description: "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
        id: "5b6c761801a7c3842953089b",
        imageURL: "images/products/baby/red-wipes.jpg",
        name: "Baby Wipes - Cherry Blossom, 2x80 pcs",
        price: 300,
        sku: "baby-wipes-red-80",
        stock: 50}
        render(<BrowserRouter><ProductsProvider><SingleProduct product = {product}/></ProductsProvider></BrowserRouter>)
        const buyBtn = screen.getByTestId("buy-btn")

        expect(screen.getByText("Baby Wipes - Cherry Blossom, 2x80 pcs")).toBeInTheDocument()
        expect(screen.getByAltText("Baby Wipes - Cherry Blossom, 2x80 pcs")).toHaveAttribute("src", "/images/products/baby/red-wipes.jpg")
        expect(screen.getByTestId("description")).toBeInTheDocument()
        expect(buyBtn).toBeInTheDocument()
        await userEvent.click(buyBtn)
        expect(await screen.findByTestId("qty-btn")).toBeInTheDocument()

    })
})