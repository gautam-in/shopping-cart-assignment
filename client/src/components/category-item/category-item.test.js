import { render, screen } from "@testing-library/react";
import CategoryItem from "./index";
import { categoriesData } from "../../data/categories";

const mockProps = {
	category: {
		...categoriesData[0],
	},
};

const setup = () => render(<CategoryItem {...mockProps} />);

describe("Category Item Component", () => {
	it("display category details", () => {
		setup();
		// const { name, description } = mockProps.category;

		// expect(screen.getByText(name)).toBeInTheDocument();
		// expect(screen.getByText(description)).toBeInTheDocument();
		// expect(screen.getByText(`Explore ${name}`)).toBeInTheDocument();
	});

	// it("counts headings count", () => {
	// 	setup();
	// 	const h2Tag = screen.getAllByRole("heading", { level: 2 });
	// 	expect(h2Tag.length).toBe(1);
	// });
});
