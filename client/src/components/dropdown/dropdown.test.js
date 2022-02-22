import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./index";
const fn = jest.fn();

const mockProps = {
	items: [
		{
			value: "",
			text: "All",
		},
		{
			value: "5b6899953d1a866534f516e2",
			text: "Fruits & Vegetables",
		},
		{
			value: "5b6899123d1a866534f516de",
			text: "Bakery Cakes and Dairy",
		},
	],
	handleChange: fn,
};

const setup = () => render(<Dropdown {...mockProps} />);

describe("Dropdown Component", () => {
	it("initially not display dropdown list", () => {
		setup();

		expect(screen.getByText(mockProps.items[0].text)).toBeInTheDocument();
		expect(screen.queryByText(mockProps.items[1].text)).not.toBeInTheDocument();
		expect(screen.queryByText(mockProps.items[2].text)).not.toBeInTheDocument();
	});

	it("display dropdown items on clicking Selection", () => {
		setup();

		userEvent.click(screen.getByText(mockProps.items[0].text));

		expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(
			mockProps.items[0].text
		);
		expect(screen.getAllByRole("listitem")[1]).toHaveTextContent(
			mockProps.items[1].text
		);
		expect(screen.getAllByRole("listitem")[2]).toHaveTextContent(
			mockProps.items[2].text
		);
	});

	it("handleChange invoked on clicking of option", () => {
		setup();

		userEvent.click(screen.getByText(mockProps.items[0].text));
		userEvent.click(screen.getAllByRole("listitem")[1]);

		expect(fn).toBeCalledWith(mockProps.items[1].value);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
