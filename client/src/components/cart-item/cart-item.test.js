import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./index";
import { productsData } from "../../data/products";
const productDispatch = jest.fn();

const mockProps = {
	dispatch: productDispatch,
	product: {
		...productsData[0],
		quantity: 3,
	},
};

const setup = () => render(<CartItem {...mockProps} />);

describe("Cart Item Component", () => {
	it("display item details", () => {
		setup();
		const { name, quantity, price, imageURL } = mockProps.product;
		const totalItemPrice = quantity * price;

		expect(screen.getByRole("img")).toHaveAttribute("src", imageURL);
		expect(screen.getByRole("img")).toHaveAttribute("alt", name);
		expect(screen.getByText(name)).toBeInTheDocument();
		expect(screen.getByText(`Rs. ${price}`)).toBeInTheDocument();
		expect(screen.getByText(`Rs.${totalItemPrice}`)).toBeInTheDocument();
	});

	it("display 2 buttons", () => {
		setup();
		expect(screen.getAllByRole("button").length).toBe(2);

		expect(screen.getAllByRole("button")[0]).toHaveTextContent("-");
		expect(screen.getAllByRole("button")[1]).toHaveTextContent("+");
	});

	it("verify product quantity increase dispatch", () => {
		setup();

		userEvent.click(screen.getAllByRole("button")[0]);
		expect(productDispatch).toHaveBeenCalledTimes(1);
	});

	it("verify product quantity decrease dispatch", () => {
		setup();

		userEvent.click(screen.getAllByRole("button")[1]);
		expect(productDispatch).toHaveBeenCalledTimes(1);
	});
});
