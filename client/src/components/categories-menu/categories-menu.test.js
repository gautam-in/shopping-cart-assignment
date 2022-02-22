import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoriesMenu from "./index";
import { categoriesData } from "../../data/categories";
const fn = jest.fn();

const mockProps = {
	categories: [
		{
			...categoriesData[1],
			type: 1,
		},
		{
			...categoriesData[2],
			type: 2,
		},
	],
	handleCategoryClick: fn,
};
const setup = () => render(<CategoriesMenu {...mockProps} />);

describe("Categories Menu Component", () => {
	it("display category name", () => {
		setup();

		expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(
			mockProps.categories[0].name
		);
		expect(screen.getAllByRole("listitem")[1]).toHaveTextContent(
			mockProps.categories[1].name
		);
	});

	it("handle category change click", () => {
		setup();

		userEvent.click(screen.getAllByRole("listitem")[1]);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
