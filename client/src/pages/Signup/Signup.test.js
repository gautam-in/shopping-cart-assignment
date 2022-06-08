import React from 'react'
import {render, screen, cleanup, act} from '@testing-library/react'
import Signup from './Signup'
import userEvent from '@testing-library/user-event'

afterEach(cleanup);

describe('Testing Signup', () => {

  test('loads and displays Signup', () => {
    render(<Signup />)

    const signupHeading = screen.getByRole('heading')
    const greetingText = screen.getByText(
      /We do not share your personal details with anyone./
    )
    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')

    expect(signupHeading).toHaveTextContent('Signup')
    expect(greetingText).toBeInTheDocument()

    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmPasswordInput).toBeInTheDocument()

    expect(firstNameInput.value).toBe('')
    expect(lastNameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
    expect(confirmPasswordInput.value).toBe('')
  })

  test('if user try to submit with out any value enter', () => {
    render(<Signup />)

    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')

    const signupButton = screen.getByRole('button')
    userEvent.click(signupButton)

    expect(screen.getByText(/please fill the firstName field/)).toBeInTheDocument()
    expect(screen.getByText(/please fill the lastName field/)).toBeInTheDocument()
    expect(screen.getByText(/please fill the email field/)).toBeInTheDocument()
    expect(screen.getByText(/please fill the password field/)).toBeInTheDocument()
    expect(screen.getByText(/please fill the confirmPassword field/)).toBeInTheDocument()
  })

  test('if user try to submit validate email format', () => {
    render(<Signup />)

    const signupButton = screen.getByRole('button')
    const emailInput = screen.getByLabelText('Email')

    userEvent.type(emailInput, 'asd@a.a')
    userEvent.click(signupButton)
    expect(screen.getByText(/incorrect email/)).toBeInTheDocument()

    userEvent.type(emailInput, 'asd@aasd.acc')
    userEvent.click(signupButton)
    expect(screen.queryByText(/incorrect email/i)).toBeNull()
  })

  test('if user try to submit validate password and confirm password format', () => {
    render(<Signup />)

    const signupButton = screen.getByRole('button')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')

    userEvent.type(passwordInput, '12asd')
    userEvent.type(confirmPasswordInput, '12asd')
    userEvent.click(signupButton)
    expect(screen.getAllByText(/password should contain minimum 6 characters/)).toHaveLength(2)

    userEvent.type(passwordInput, '123asd')
    userEvent.type(confirmPasswordInput, '123asd')
    userEvent.click(signupButton)
    expect(screen.queryByText(/password should contain minimum 6 characters/i)).toBeNull()
  })

  test('if user try to submit different password and confirm password', async () => {
    render(<Signup />)

    const signupButton = screen.getByRole('button')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')

    userEvent.type(passwordInput, '123asd')
    userEvent.type(confirmPasswordInput, '123asd1')
    userEvent.click(signupButton)
    expect(screen.getByText(/confirm password did not match/)).toBeInTheDocument()
  })

  test('if user try to submit same password and confirm password', async () => {
    render(<Signup />)

    const signupButton = screen.getByRole('button')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')

    userEvent.type(passwordInput, '123asd')
    userEvent.type(confirmPasswordInput, '123asd')
    userEvent.click(signupButton)
    expect(screen.queryByText(/confirm password did not match/)).toBeNull()
  })

})
