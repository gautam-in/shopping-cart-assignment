import { CartItem } from "../index-components"
import { render, screen } from '@testing-library/react';
import { ProductsProvider } from '../../context/productContext';
import "@testing-library/jest-dom";

describe("test single cart item", () => {
    test("should have all the product details", () => {
        const product = {
            category: "5b6899953d1a866534f516e2",
            description: "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            id: "5b6c6aeb01a7c38429530884",
            imageURL: "images/products/fruit-n-veg/apple.jpg",
            name: "Apple - Washington, Regular, 4 pcs",
            price: 187,
            quantity: 2,
            sku: "fnw-apple-4",
            stock: 500,
        }
        render(<ProductsProvider><CartItem product = {product}/></ProductsProvider>)

        expect(screen.getByAltText(/Apple - Washington, Regular, 4 pcs/)).toHaveAttribute("src", "/images/products/fruit-n-veg/apple.jpg")
        expect(screen.getByText("Apple - Washington, Regular, 4 pcs")).toBeInTheDocument()
        expect(screen.getByText("X 187")).toBeInTheDocument()
        expect(screen.getByText("RS.374")).toBeInTheDocument()
        expect(screen.getByTestId("quantity-button")).toBeInTheDocument()
    })
})