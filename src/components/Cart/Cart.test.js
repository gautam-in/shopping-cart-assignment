import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { Cart } from "./Cart";

const cartItems = [{
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883",
    "count": 1
}];

test("should render empty cart component", async () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const onRemove = jest.fn();

    await act(() => render(
        <BrowserRouter>
            <Cart items={[]} totalPrice="0" totalItems="0"
                onAdd={onAdd} onClose={onClose} onRemove={onRemove}
            />
        </BrowserRouter>
    ));

    expect(screen.getByTestId("cart-empty")).toBeInTheDocument();
    expect(screen.getByTestId("cart-empty-title")).toHaveTextContent("No items in your cart");
});

test("should render cart component", async () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const onRemove = jest.fn();

    await act(() => render(
        <BrowserRouter>
            <Cart items={cartItems} totalPrice="87" totalItems="1"
                onAdd={onAdd} onClose={onClose} onRemove={onRemove}
            />
        </BrowserRouter>
    ));

    expect(screen.getAllByTestId("cart-item")).toHaveLength(1);
    const productNames = await screen.getAllByTestId("product-name");
    expect(productNames[0]).toHaveTextContent(cartItems[0].name);
});

test("should invoke all cart events", async () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const onRemove = jest.fn();

    await act(() => render(
        <BrowserRouter>
            <Cart items={cartItems} totalPrice="87" totalItems="1"
                onAdd={onAdd} onClose={onClose} onRemove={onRemove}
            />
        </BrowserRouter>
    ));

    const productRemove = await screen.getAllByTestId("product-remove");
    const productAdd = await screen.getAllByTestId("product-add");
    fireEvent.click(productRemove[0]);
    expect(onRemove).toHaveBeenCalled();
    fireEvent.click(productAdd[0]);
    expect(onAdd).toHaveBeenCalled();
});
