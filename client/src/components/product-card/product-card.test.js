import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./index";
import { CartContext } from "../../contexts/cart-context";
import { productsData } from "../../data/products";

const addToCart = jest.fn().mockResolvedValue(
	JSON.stringify({
		response: "Success",
		responseMessage: "Product added to cart successfully",
	})
);

const mockProps = {
	product: { ...productsData[0] },
};

beforeEach(() => {
	jest.spyOn(global, "fetch").mockResolvedValue({
		json: addToCart(),
	});
});

afterEach(() => {
	jest.restoreAllMocks();
});

const setup = () =>
	render(
		<CartContext.Provider
			value={{
				dispatch: addToCart,
			}}
		>
			<ProductCard {...mockProps} />
		</CartContext.Provider>
	);

describe("Product Card Component", () => {
	it("display product data", () => {
		setup();

		const { product } = mockProps;

		expect(screen.getByRole("img")).toHaveAttribute("src", product.imageURL);
		expect(screen.getByRole("img")).toHaveAttribute("alt", product.name);
		expect(screen.getByRole("heading")).toHaveTextContent(product.name);

		expect(screen.getByText(product.description)).toBeInTheDocument();
		expect(screen.getByText(`MRP Rs.${product.price}`)).toBeInTheDocument();
	});

	it("dispatch addToCart", () => {
		setup();

		userEvent.click(screen.getAllByRole("button")[0]);
		expect(addToCart).toHaveBeenCalledTimes(1);
	});
});
