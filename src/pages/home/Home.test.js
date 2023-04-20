import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Home } from "./Home";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import mockFetch from "../../jest/__mocks__/fetch";

const BANNERS = mockFetch("http://localhost:5000/categories");

jest.mock("../../api/ProductsAPI", () => ({
    ProductsAPI: {
        getBanner: async function () {
            const response = mockFetch("http://localhost:5000/banners");
            
            return Promise.resolve(response.data);
        },
        getCategories: async function() {
            const response = mockFetch("http://localhost:5000/categories");
    
            return Promise.resolve(response.data);
        },
    }
}));

test("renders the home page", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    ));

    await waitFor(async () => {
        expect(screen.getAllByTestId("carousel-element")).toHaveLength(2);
        expect(screen.getAllByTestId("categories-element")).toHaveLength(BANNERS.data.length);

        // Clicking on first button redirected to correct route
        const categoryElements = await screen.getAllByTestId("categories-element");
        fireEvent.click(categoryElements[0].getElementsByTagName("button")[0]);
        expect(location.pathname).toBe('/products/' + BANNERS.data[0].id);
    });
});