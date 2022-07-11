
import Login from './Login';
import { validateLoginForm } from './validateLoginForm';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import React from "react"

describe("test validate function with login form", () => {
    test("should success on valid form data", () => {
        const formData = {email:"ram@gmail.com", password:"one123"}
        const result = validateLoginForm(formData)
        expect(result).toEqual({})
    })
    test("should return error on both failed", () => {
        const formData = { email: "ram@g.c", password: "123"}
        const result = validateLoginForm(formData)
        const expectedResult = {email:"Please enter a valid email", pwd: "Password must have at least six characters"}
        expect(result).toEqual(expectedResult)
    })
    test("should return error on email failed", () => {
        const formData = { email: "ram@g.c", password: "one123"}
        const result = validateLoginForm(formData)
        const expectedResult = {email:"Please enter a valid email"}
        expect(result).toEqual(expectedResult)
    })
    test("should return error on pwd failed", () => {
        const formData = { email: "ram@gmail.com", password: "one12"}
        const result = validateLoginForm(formData)
        const expectedResult = {pwd: "Password must have at least six characters"}
        expect(result).toEqual(expectedResult)
    })
})

describe("test login component render", () => {
    
    test("should contain email, password and button fields in Login component", () => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        const labelElement =  screen.getByLabelText("Email")
        const firstInput = screen.getByRole("textbox")
        const secondLabelElement = screen.getByLabelText("Password")
        const secondInput = screen.getByPlaceholderText("Enter your password")
        const loginButton = screen.getByRole("button")
        expect( labelElement).toBeInTheDocument()
        expect( secondLabelElement).toBeInTheDocument()
        expect( firstInput ).toHaveAttribute("type", "email")
        expect( secondInput ).toHaveAttribute("type", "password")
        expect( loginButton ).toBeInTheDocument()
    })
    test("should render login component on Page", () => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        const loginComponent = screen.getByTestId("login-form")
        expect( loginComponent ).toBeInTheDocument()

    })
    test("should display error messages on empty form submission", async() => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        await userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "ram")
        await userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "a")
        const button = screen.getByRole("button", {name: "Login"})
        userEvent.click(button)
        expect(await screen.findByTestId("email-error")).toHaveTextContent("Please enter a valid email")
        expect(await screen.findByTestId("pwd-error")).toHaveTextContent("Password must have at least six characters")
    })
   
    test("should not have any error messages on valid form data submission", async() => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        await userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "ram@gmail.com")
        await userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "one123")
        const button = screen.getByRole("button", {name: "Login"})
        await userEvent.click(button)
        expect( screen.queryByTestId("email-error")).not.toBeInTheDocument()
        expect( screen.queryByTestId("pwd-error")).not.toBeInTheDocument()
    })
})
 