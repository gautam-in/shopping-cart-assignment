import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartBlock from "./index";
import { CartContext } from "../../contexts/cart-context";
import { productsData } from "../../data/products";
const toggleCart = jest.fn();

function renderCart(items) {
	return render(
		<CartContext.Provider
			value={{
				state: {
					items,
				},
				dispatch: toggleCart,
			}}
		>
			<CartBlock />
		</CartContext.Provider>
	);
}

describe("Cart Block Component", () => {
	it("dispatch toggleCart on close icon click", () => {
		renderCart([]);

		userEvent.click(screen.getAllByRole("button")[0]);
		expect(toggleCart).toHaveBeenCalledTimes(1);
	});

	it("display close icon", () => {
		renderCart([]);
		expect(screen.getAllByRole("button")[0]).toHaveTextContent("✖");
	});

	describe("No Items in cart suite", () => {
		it("display no items in cart related messages", () => {
			renderCart([]);

			expect(screen.getByText("My Cart")).toBeInTheDocument();
			expect(screen.getByText("No items in your cart")).toBeInTheDocument();
			expect(
				screen.getByText("Your favourite items are just a click away")
			).toBeInTheDocument();
			expect(screen.getByText("Start Shopping")).toBeInTheDocument();
		});

		it("display 2 buttons, 1 for close, 1 for start shopping", () => {
			renderCart([]);

			expect(screen.getAllByRole("button").length).toBe(2);
		});

		it("display Start Shopping button", () => {
			renderCart([]);
			expect(screen.getAllByRole("button")[1]).toHaveTextContent(
				"Start Shopping"
			);
		});
	});
	describe("Items in cart suite", () => {
		const items = [
			{
				...productsData[0],
				quantity: 1,
			},
			{
				...productsData[1],
				quantity: 2,
			},
		];
		it("display items in cart related messages", () => {
			renderCart(items);

			expect(screen.getByText("My Cart")).toBeInTheDocument();
			expect(screen.getByText("(3 items)")).toBeInTheDocument();
			expect(
				screen.getByText("You won't find it cheaper anywhere")
			).toBeInTheDocument();
			expect(
				screen.getByText("Promo code can be applied on payment page.")
			).toBeInTheDocument();
			expect(screen.getByText("Proceed to Checkout")).toBeInTheDocument();
		});

		it("verify item 1 details", () => {
			renderCart(items);
			const { name, quantity, price } = items[0];
			const totalItemPrice = quantity * price;

			expect(screen.getByText(name)).toBeInTheDocument();
			expect(screen.getByText(`Rs. ${price}`)).toBeInTheDocument();
			expect(screen.getByText(`Rs.${totalItemPrice}`)).toBeInTheDocument();
		});

		it("verify total items price", () => {
			renderCart(items);
			const totalPrice = items.reduce(
				(acc, product) => acc + product.quantity * product.price,
				0
			);
			const total = new RegExp(`Rs.${totalPrice}`);
			expect(screen.getByText(total)).toBeInTheDocument();
		});
	});
});
