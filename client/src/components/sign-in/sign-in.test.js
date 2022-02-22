import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "./index";

const setup = () => render(<SignIn />);

describe("Sign In Component", () => {
	test("Email label", () => {
		setup();
		expect(screen.getByLabelText("Email")).toBeInTheDocument();
	});

	test("Email is required error message", () => {
		setup();
		const emailLabel = screen.queryByLabelText("Email");

		userEvent.type(emailLabel, "a");
		expect(screen.queryByText(/Email is required./i)).not.toBeInTheDocument();

		userEvent.clear(emailLabel);
		expect(screen.getByText(/Email is required./i)).toBeInTheDocument();
	});

	test("Email is not valid error message", () => {
		setup();

		userEvent.type(screen.getByLabelText("Email"), "a");
		expect(screen.getByText(/Email is not valid./i)).toBeInTheDocument();
	});

	test("No email error messages for valid value", () => {
		setup();

		userEvent.type(screen.getByLabelText("Email"), "a@mail.com");

		const emailErrorMessage = screen.queryByText(
			(content) =>
				content.includes("Email is not valid.") ||
				content.includes("Email is required.")
		);

		expect(emailErrorMessage).not.toBeInTheDocument();
	});

	test("Display password label", () => {
		setup();
		expect(screen.getByLabelText("Password")).toBeInTheDocument();
	});

	test("Password is required error message", () => {
		setup();
		const passwordLabel = screen.queryByLabelText("Password");

		userEvent.type(passwordLabel, "a");
		expect(
			screen.queryByText(/Password is required./i)
		).not.toBeInTheDocument();
		expect(
			screen.getByText(/Password must have minimum 6 characters./i)
		).toBeInTheDocument();

		userEvent.clear(passwordLabel);
		expect(screen.getByText(/Password is required./i)).toBeInTheDocument();
	});

	test("Password length error message", () => {
		setup();
		const passwordLabel = screen.queryByLabelText("Password");

		userEvent.type(passwordLabel, "abcdefg");
		expect(
			screen.queryByText(/Password must have minimum 6 characters./i)
		).not.toBeInTheDocument();

		userEvent.clear(passwordLabel);
		userEvent.type(passwordLabel, "abcd");
		expect(
			screen.getByText(/Password must have minimum 6 characters./i)
		).toBeInTheDocument();
	});

	test("Password spaces error message", () => {
		setup();
		const passwordLabel = screen.queryByLabelText("Password");

		userEvent.type(passwordLabel, "abc defg");
		expect(
			screen.getByText(/Password should not contains space./i)
		).toBeInTheDocument();
	});

	test("Password strength error message", () => {
		setup();
		const passwordLabel = screen.queryByLabelText("Password");

		userEvent.type(passwordLabel, "abcdefg");
		expect(
			screen.getByText(
				/Password should contains alteast one character and a number./i
			)
		).toBeInTheDocument();
	});

	test("No error message for password", () => {
		setup();
		const passwordLabel = screen.queryByLabelText("Password");

		userEvent.type(passwordLabel, "12345abcd");

		const passwordErrorMessages = screen.queryByText(
			(content) =>
				content.includes("Password is required.") ||
				content.includes("Password must have minimum 6 characters.") ||
				content.includes("Password should not contains space.") ||
				content.includes(
					"Password should contains alteast one character and a number."
				)
		);

		expect(passwordErrorMessages).not.toBeInTheDocument();
	});

	test("Sign in button text", () => {
		setup();
		expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
	});

	test("Count of buttons length = 1", () => {
		setup();
		expect(screen.getAllByRole("button").length).toBe(1);
	});

	test("Submit button is disabled on initial load", () => {
		setup();
		expect(screen.getByRole("button")).toBeDisabled();
	});

	test("Submit button is enabled for correct inputs", () => {
		setup();
		userEvent.type(screen.queryByLabelText("Password"), "12345abcd");
		userEvent.type(screen.getByLabelText("Email"), "a@mail.com");
		expect(screen.getByRole("button")).not.toBeDisabled();
	});

	test("handleSubmit method is called on Submit", () => {
		setup();
		userEvent.type(screen.getByLabelText("Email"), "a@mail.com");
		userEvent.type(screen.getByLabelText("Password"), "12345abcd");
		userEvent.click(screen.getByText(/Sign In/i));
	});
});
