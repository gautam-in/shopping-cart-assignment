import { QuantityButton } from "../index-components"
import { render, screen } from '@testing-library/react';
import { ProductsContext, ProductsProvider } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import React from "react"

jest.mock("axios")

describe("test quantity button", () => {
    
    test("should have decrement, increment and quantity", async () => {
        const product = {category: "5b6899683d1a866534f516e0",
        description: "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
        id: "5b6c761801a7c3842953089b",
        imageURL: "images/products/baby/red-wipes.jpg",
        name: "Baby Wipes - Cherry Blossom, 2x80 pcs",
        price: 300,
        sku: "baby-wipes-red-80",
        stock: 50}
        const productState = {
        cartData:[{category: "5b6899683d1a866534f516e0",
        description: "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
        id: "5b6c761801a7c3842953089b",
        imageURL: "images/products/baby/red-wipes.jpg",
        name: "Baby Wipes - Cherry Blossom, 2x80 pcs",
        price: 300,
        sku: "baby-wipes-red-80",
        quantity:1,
        stock: 50}],
    }
        render(<BrowserRouter><ProductsContext.Provider value = {{ productState }}><QuantityButton product = {product}/></ProductsContext.Provider></BrowserRouter>)
        expect(screen.getByRole("button", {name:"-"})).toBeInTheDocument()
        expect(screen.getByRole("button", {name:"+"})).toBeInTheDocument()
        const qtyDisplay = screen.getByTestId("qty-display")
        expect(qtyDisplay).toHaveTextContent("Qty: 1")
     


    })

})