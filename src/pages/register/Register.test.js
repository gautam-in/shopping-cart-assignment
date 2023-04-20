import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { Register } from "./Register";

function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

test("should validate register form fields", async () => {
    let userForm = null;
    const mockSave = jest.fn();
    await act(() => userForm = setup(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    ));
    const form = await screen.getByTestId("register-form");
    form.onsubmit = mockSave;
    expect(screen.getByTestId("register-title")).toHaveTextContent("Signup");
    expect(screen.getByTestId("register-description")).toHaveTextContent("We do not share your personal details with anyone.");

    await userForm.user.click(screen.getByTestId("register-submit"));
    
    //Should show 5 errors (5: no. of fields)
    expect(screen.getAllByTestId("input-error")).toHaveLength(5);

    //Should call submit
    expect(mockSave).toBeCalled();
});

test("should submit correct form data", async () => {
    let userForm = null;
    const mockSave = jest.fn();
    await act(() => userForm = setup(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    ));
    const form = await screen.getByTestId("register-form");
    form.onsubmit = mockSave;

    await userForm.user.type(
        screen.getByRole("textbox", { name: /firstName/i }),
        "Test"
    );

    await userForm.user.type(
        screen.getByRole("textbox", { name: /lastName/i }),
        "User"
    );


    await userForm.user.type(
        screen.getByRole("textbox", { name: /email/i }),
        "test@email.com"
    );

    await userForm.user.type(
        screen.getByRole("textbox", { name: "password" }),
        "test@123"
    );

    await userForm.user.type(
        screen.getByRole("textbox", { name: /confirmPassword/i }),
        "test@123"
    );

    expect(screen.getByRole("textbox", { name: /firstName/i })).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByRole("textbox", { name: /lastName/i })).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByRole("textbox", { name: /email/i })).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByRole("textbox", { name: "password"})).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByRole("textbox", { name: /confirmPassword/i })).toHaveAttribute("aria-invalid", "false");

    await userForm.user.click(screen.getByTestId("register-submit"));

    //Should call submit
    expect(mockSave).toHaveBeenCalled();
});
