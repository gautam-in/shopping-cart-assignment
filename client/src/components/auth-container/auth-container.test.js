import { render, screen } from "@testing-library/react";
import AuthContainer from "./index";

const mockProps = {
	title: "Login",
	subTitle: "Get access to your Orders, Wishlist and Recommendations.",
	children: null,
};
const setup = () => render(<AuthContainer {...mockProps} />);

describe("Auth Container Component", () => {
	test("h1 tags count = 1", () => {
		setup();
		const h1Tag = screen.getAllByRole("heading", { level: 1 });
		expect(h1Tag.length).toBe(1);
	});

	test("Title text", () => {
		setup();
		expect(screen.getByText(mockProps.title)).toBeInTheDocument();
	});

	test("Subtitle  text", () => {
		setup();
		expect(screen.getByText(mockProps.subTitle)).toBeInTheDocument();
	});
});
