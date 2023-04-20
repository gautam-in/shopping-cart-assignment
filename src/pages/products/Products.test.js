import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import mockFetch from "../../jest/__mocks__/fetch";
import { Products } from "./Products";
import ProductListing from "./ProductListing";
import { renderWithProviders } from "../../jest/renderWithProviders";

const BANNERS = mockFetch("http://localhost:5000/categories");

jest.mock("../../api/ProductsAPI", () => ({
    ProductsAPI: {
        getProducts: async function () {
            const response = mockFetch("http://localhost:5000/products");

            return Promise.resolve(response.data);
        },
        getCategories: async function () {
            const response = mockFetch("http://localhost:5000/categories");

            return Promise.resolve(response.data);
        },
    }
}));

test("renders the products filtering page", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Products />
        </BrowserRouter>
    ));

    await waitFor(async () => {
        const categoryElements = await screen.getAllByTestId("categories-filter");
        expect(categoryElements).toHaveLength(2);

        fireEvent.click(categoryElements[0]);
        expect(location.pathname).toBe('/products/' + BANNERS.data[0].id);
    });
});

test("renders the product listing page", async () => {
    let reduxProvider = null;
    await act(async () => {
        reduxProvider = renderWithProviders(
            <BrowserRouter>
                <ProductListing />
            </BrowserRouter>
        )
    });

    await waitFor(async () => {
        const productElements = await screen.getAllByTestId("product-item");
        expect(productElements).toHaveLength(2);

        // On clicking buy now it should call redux dispatch
        const buyNowElements = await screen.getAllByTestId("buy-now");
        fireEvent.click(buyNowElements[0]);
        expect(reduxProvider.store.dispatch).toHaveBeenCalled();
    })
});