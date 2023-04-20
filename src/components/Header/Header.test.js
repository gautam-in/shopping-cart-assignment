import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../../App";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

jest.mock("@components/Cart", () => () => {
    return <mock-modal data-testid="cart"/>;
});

test("renders the header component", async () => {
    await act( async () => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ));
    // Should have skip to main link for accessibility 
    expect(screen.getByTestId("skip-to-main")).toHaveTextContent(/Skip to Main Content/);

    expect(screen.getByTestId("app-logo")).toBeInTheDocument();

    // Check header links are present
    expect(screen.getByTestId("home-link")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("products-link")).toHaveAttribute("href", "/products");
    expect(screen.getByTestId("sign-in-link")).toHaveAttribute("href", "/login");
    expect(screen.getByTestId("register-link")).toHaveAttribute("href", "/register");

    const cartButton = await screen.getByTestId("cart-button");
    fireEvent.click(cartButton);
    expect(screen.getByTestId("cart")).toBeInTheDocument();
});
