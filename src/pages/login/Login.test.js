import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Login } from "./Login";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

test("should validate login form fields", async () => {
    let userForm = null;
    const mockSave = jest.fn();
    await act(() => userForm = setup(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    ));
    const form = await screen.getByTestId("login-form");
    form.onsubmit = mockSave;
    expect(screen.getByTestId("login-title")).toHaveTextContent("Login");
    expect(screen.getByTestId("login-description")).toHaveTextContent("Get Access to your Orders, Wishlist and Recommendations");

    await userForm.user.click(screen.getByTestId("login-submit"));
    
    //Should show 2 errors
    expect(screen.getAllByTestId("input-error")).toHaveLength(2);

    //Should call submit
    expect(mockSave).toBeCalled();
});

test("should submit correct form data", async () => {
    let userForm = null;
    const mockSave = jest.fn();
    await act(() => userForm = setup(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    ));
    const form = await screen.getByTestId("login-form");
    form.onsubmit = mockSave;

    await userForm.user.type(
        screen.getByRole("textbox", { name: /email/i }),
        "test@email.com"
    );

    await userForm.user.type(
        screen.getByRole("textbox", { name: /password/i }),
        "test@123"
    );

    expect(screen.getByRole("textbox", { name: /email/i })).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByRole("textbox", { name: /password/i })).toHaveAttribute("aria-invalid", "false");

    await userForm.user.click(screen.getByTestId("login-submit"));

    //Should call submit
    expect(mockSave).toHaveBeenCalled();
});
