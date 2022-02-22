import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./index";
import { CartContext } from "../../contexts/cart-context";
import { productsData } from "../../data/products";
const fn = jest.fn();

function renderCart(items) {
	return render(
		<CartContext.Provider
			value={{
				state: {
					items,
				},
				dispatch: fn,
			}}
		>
			<Cart />
		</CartContext.Provider>
	);
}

describe("Cart Component", () => {
	it("dispatch toggleCart event 1 time", () => {
		renderCart([]);

		userEvent.click(screen.getByRole("button"));
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("dispatch toggleCart event 5 times", () => {
		renderCart([]);

		userEvent.click(screen.getByRole("button"));
		userEvent.click(screen.getByRole("button"));
		userEvent.click(screen.getByRole("button"));
		userEvent.click(screen.getByRole("button"));
		userEvent.click(screen.getByRole("button"));
		expect(fn).toHaveBeenCalledTimes(5);
	});

	it("display 1 button element", () => {
		renderCart([]);
		expect(screen.getAllByRole("button").length).toBe(1);
	});

	it("display 0 items text", () => {
		renderCart([]);
		expect(screen.getByText("0 items")).toBeInTheDocument();
	});

	it("display 1 item text, for 1 item, 1 quantity", () => {
		renderCart([
			{
				...productsData[0],
				quantity: 1,
			},
		]);
		expect(screen.getByText("1 item")).toBeInTheDocument();
	});

	it("display 2 items text, for 1 item, 2 quantities", () => {
		renderCart([
			{
				...productsData[0],
				quantity: 2,
			},
		]);
		expect(screen.getByText("2 items")).toBeInTheDocument();
	});

	it("display 4 items text, for 2 items of 2 quantities", () => {
		renderCart([
			{
				...productsData[0],
				quantity: 2,
			},
			{
				...productsData[1],
				quantity: 2,
			},
		]);
		expect(screen.getByText("4 items")).toBeInTheDocument();
	});
});
