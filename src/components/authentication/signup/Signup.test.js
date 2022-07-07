
import Signup from './Signup';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
describe("test login component render", () => {
    
    test("should contain firstName, lastName, email, password and Login button in the component", () => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        const labelElement =  screen.getByLabelText("Email")
        const firstInput = screen.getByPlaceholderText("Enter your email")
        const secondLabelElement = screen.getByLabelText("Password")
        const secondInput = screen.getByPlaceholderText("Enter your password")
        const firstNameElement = screen.getByLabelText("First Name")
        const firstNameInput = screen.getByPlaceholderText("Enter your first name")
        const lastNameElement = screen.getByLabelText("Last Name")
        const lastNameInput = screen.getByPlaceholderText("Enter your last name")
        const confirmPasswordElement = screen.getByLabelText("Confirm Password")
        const confirmPasswordInput = screen.getByPlaceholderText("Re-enter your password")
        const loginButton = screen.getByRole("button")

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
})
