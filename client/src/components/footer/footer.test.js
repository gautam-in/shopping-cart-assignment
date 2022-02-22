import { render, screen } from "@testing-library/react";
import Footer from "./index";

const setup = () => render(<Footer />);

describe("Footer Component", () => {
	test("Copyright text", () => {
		setup();

		const text = new RegExp(
			`2011-${new Date().getFullYear()} Sabka Bazaar Grocery Supplies Pvt Ltd.`
		);

		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
