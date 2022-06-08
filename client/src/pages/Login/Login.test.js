import React from 'react'
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import Login from './Login'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('Testing Login', () => {

  test('loads and displays Login form', () => {
    render(<Login />)

    const loginHeading = screen.getByRole('heading')
    const greetingText = screen.getByText(
      /Get access to your Orders. Wishlist and Recommendations/
    )
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')

    expect(loginHeading).toHaveTextContent('Login')
    expect(greetingText).toBeInTheDocument()
    expect(greetingText).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
  })

  test('if user try to submit with out any value enter', () => {
    render(<Login />)

    const loginButton = screen.getByRole('button')
    userEvent.click(loginButton)

    const emailErrorText = screen.getByText(/please fill the email field/)
    const passwordErrorText = screen.getByText(/please fill the password field/)
    expect(emailErrorText).toBeInTheDocument()
    expect(passwordErrorText).toBeInTheDocument()
  })

  test('if user try to submit validate email format', () => {
    render(<Login />)

    const loginButton = screen.getByRole('button')
    const emailInput = screen.getByLabelText('Email')

    userEvent.type(emailInput, 'asd@a.a')
    userEvent.click(loginButton)
    expect(screen.getByText(/incorrect email/)).toBeInTheDocument()

    userEvent.type(emailInput, 'asd@aasd.acc')
    userEvent.click(loginButton)
    expect(screen.queryByText(/incorrect email/i)).toBeNull()
  })

  test('if user try to submit validate password format', () => {
    render(<Login />)

    const loginButton = screen.getByRole('button')
    const passwordInput = screen.getByLabelText('Password')

    userEvent.type(passwordInput, '12asd')
    userEvent.click(loginButton)
    expect(screen.getByText(/password should contain minimum 6 characters/)).toBeInTheDocument()

    userEvent.type(passwordInput, '123asd')
    userEvent.click(loginButton)
    expect(screen.queryByText(/password should contain minimum 6 characters/i)).toBeNull()
  })

  test('if user try to submit with validate details', () => {
    render(<Login />)

    const loginButton = screen.getByRole('button')
    const passwordInput = screen.getByLabelText('Password')
    const emailInput = screen.getByLabelText('Email')

    userEvent.type(emailInput, 'asd@asd.com')
    userEvent.type(passwordInput, '123asd')
    userEvent.click(loginButton)

    expect(screen.queryByText(/incorrect email/i)).toBeNull()
    expect(screen.queryByText(/password should contain minimum 6 characters/i)).toBeNull()
    expect(screen.queryByText(/please fill the email field/)).toBeNull()
    expect(screen.queryByText(/please fill the password field/)).toBeNull()
  })
})
