
import Signup from './Signup';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import React from "react"

describe("test login component render", () => {
    
    test("should contain firstName, lastName, email, password and Login button in the component", () => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        const labelElement =  screen.getByLabelText(/Email/i)
        const firstInput = screen.getByTestId("email")
        const secondLabelElement = screen.getByLabelText("Password*")
        const secondInput = screen.getByTestId("password")
        const firstNameElement = screen.getByLabelText(/First Name/i)
        const firstNameInput = screen.getByTestId("first-name")
        const lastNameElement = screen.getByLabelText(/Last Name/i)
        const lastNameInput = screen.getByTestId("last-name")
        const confirmPasswordElement = screen.getByLabelText(/Confirm Password/i)
        const confirmPasswordInput = screen.getByTestId("confirm-password")
        const loginButton = screen.getByRole("button", {name: "Signup"})

        expect( labelElement).toBeInTheDocument()
        expect( secondLabelElement).toBeInTheDocument()
        expect( firstNameElement).toBeInTheDocument()
        expect( lastNameElement).toBeInTheDocument()
        expect( confirmPasswordElement).toBeInTheDocument()
        expect( firstInput ).toHaveAttribute("type", "email")
        expect( secondInput ).toHaveAttribute("type", "password")
        expect( firstNameInput ).toHaveAttribute("type", "text")
        expect( lastNameInput ).toHaveAttribute("type", "text")
        expect( confirmPasswordInput ).toHaveAttribute("type", "password")
        
        expect( loginButton ).toHaveTextContent("Signup")
    })
    test("should render login component on Page", () => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        const loginComponent = screen.getByTestId("signup-form")
        expect( loginComponent ).toBeInTheDocument()

    })
    test("should display error messages on empty form submission", async() => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        await userEvent.type(screen.getByTestId("first-name"), "ra")
        await userEvent.type(screen.getByTestId("last-name"), "a")
        await userEvent.type(screen.getByTestId("email"), "ram")
        await userEvent.type(screen.getByTestId("password"), "a")
        await userEvent.type(screen.getByTestId("confirm-password"), "ram")

        const button = screen.getByRole("button", {name: "Signup"})
        await userEvent.click(button)
        expect(await screen.findByTestId("email-error")).toHaveTextContent("Please enter a valid email")
        expect(await screen.findByTestId("pwd-error")).toHaveTextContent("Password must contain one character and a number and at least six characters with no space")
        expect(await screen.findByTestId("cfPwd-error")).toHaveTextContent("Passwords should match")
        expect(await screen.findByTestId("lastName-error")).toHaveTextContent("Enter valid last name")
        expect(await screen.findByTestId("firstName-error")).toHaveTextContent("Enter valid first name")
    })
    test("should display generic error if button clicked without form data", async () => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        const button = screen.getByRole("button", {name: "Signup"})
        await userEvent.click(button)
        expect (await screen.findByTestId("default-error")).toHaveTextContent("Please fill all the details")
    })
    test("should display no error for password match on both match case", async () => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        await userEvent.type(screen.getByTestId("password"), "ram123")
        await userEvent.type(screen.getByTestId("confirm-password"), "ram123")

        expect(screen.queryByTestId("cfPwd-error")).not.toBeInTheDocument()

    })

   

})
