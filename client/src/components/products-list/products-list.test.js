import { render, screen } from "@testing-library/react";
import ProductsList from "./index";
import { productsData } from "../../data/products";
import { CartContext } from "../../contexts/cart-context";

const fn = jest.fn();

const mockProps = {
	products: productsData.slice(0, 2),
};

const setup = () =>
	render(
		<CartContext.Provider
			value={{
				dispatch: fn,
			}}
		>
			<ProductsList {...mockProps} />
		</CartContext.Provider>
	);

describe("Products List Component", () => {
	it("h3 tags count = 2 for 2 products", () => {
		setup();

		expect(screen.getAllByRole("heading").length).toBe(2);
	});

	it("check products data on screen", () => {
		setup();

		expect(screen.getAllByRole("img").length).toBe(2);

		mockProps.products.forEach((product, index) => {
			expect(screen.getAllByRole("img")[index]).toHaveAttribute(
				"src",
				product.imageURL
			);
			expect(screen.getAllByRole("img")[index]).toHaveAttribute(
				"alt",
				product.name
			);

			expect(screen.getByText(product.name)).toBeInTheDocument();
			expect(screen.getByText(product.description)).toBeInTheDocument();
			expect(screen.getByText(`MRP Rs.${product.price}`)).toBeInTheDocument();

			expect(screen.getAllByRole("button")[index]).toHaveTextContent("Buy Now");
		});
	});

	// test("Title text", () => {
	// 	setup();
	// 	expect(screen.getByText(mockProps.title)).toBeInTheDocument();
	// });

	// test("Subtitle  text", () => {
	// 	setup();
	// 	expect(screen.getByText(mockProps.subTitle)).toBeInTheDocument();
	// });
});
