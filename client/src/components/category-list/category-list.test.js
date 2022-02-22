import { render, screen } from "@testing-library/react";
import CategoryList from "./index";
import { categoriesData } from "../../data/categories";

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
};

const setup = () => render(<CategoryList {...mockProps} />);

describe("Category List Component", () => {
	it("verify category details", () => {
		setup();
		const { name, description } = mockProps.categories[0];

		expect(screen.getByText(name)).toBeInTheDocument();
		expect(screen.getByText(description)).toBeInTheDocument();
		expect(screen.getByText(`Explore ${name}`)).toBeInTheDocument();
	});

	it("display category details with type 2", () => {
		setup();
		const { name, description } = mockProps.categories[1];

		expect(screen.getByText(name)).toBeInTheDocument();
		expect(screen.getByText(description)).toBeInTheDocument();
		expect(screen.getByText(`Explore ${name}`)).toBeInTheDocument();
	});

	it("headings count = 2", () => {
		setup();
		const h2Tag = screen.getAllByRole("heading", { level: 2 });
		expect(h2Tag.length).toBe(2);
	});
});
