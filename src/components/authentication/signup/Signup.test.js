
import Signup from './Signup';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
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
    test("should display error messages on empty form submission", async() => {
        render(<BrowserRouter><Signup /></BrowserRouter>)
        await userEvent.type(screen.getByPlaceholderText(/Enter your first name/i), "ra")
        await userEvent.type(screen.getByPlaceholderText(/Enter your last name/i), "a")
        await userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "ram")
        await userEvent.type(screen.getByPlaceholderText(/Enter your password/), "a")
        await userEvent.type(screen.getByPlaceholderText(/Re-enter your password/i), "ram")

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
        await userEvent.type(screen.getByPlaceholderText(/Enter your password/), "ram123")
        await userEvent.type(screen.getByPlaceholderText(/Re-enter your password/i), "ram123")

        expect(screen.queryByTestId("cfPwd-error")).not.toBeInTheDocument()

    })
    // test("should redirect to home page on successful form submission", async () => {
    //     render(<BrowserRouter><Signup /></BrowserRouter>)

    //     const user = userEvent.setup()
    //     await userEvent.type(screen.getByPlaceholderText(/Enter your first name/i), "rama")
    //     await userEvent.type(screen.getByPlaceholderText(/Enter your last name/i), "linga")
    //     await userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "rama@gmail.com")
    //     await userEvent.type(screen.getByPlaceholderText(/Enter your password/), "ram123")
    //     await userEvent.type(screen.getByPlaceholderText(/Re-enter your password/i), "ram123")

    //     const button = screen.getByRole("button", {name: "Signup"})
    //     await user.click(button)

    //     expect (await screen.findByTestId("home-page")).toBeInTheDocument()
    // })
   

})
