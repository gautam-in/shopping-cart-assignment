import {render, screen} from '@testing-library/react'
import Register from 'pages/register.tsx'
import {renderWithClient} from 'mocks/utils'
import userEvent from '@testing-library/user-event'

describe('Register Page', () => {
  it('testing login ui fields', async () => {
    const result = renderWithClient(<Register />)
    const registerHeading = screen.getByRole('heading', {name: /Signup/i})
    const registerDescription = screen.getByText(
      /We do not share your personal details with anyone/i,
    )
    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const confirmPasswordInput = screen.getByLabelText('Confirm Password')
    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmPasswordInput).toBeInTheDocument()
    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
  })
  it('check for required fields', async () => {
    const result = renderWithClient(<Register />)
    userEvent.click(await screen.getByRole('button', {name: /signup/i}))
    expect(
      await screen.findByText(/first name cannot be empty/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/last name cannot be empty/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/email cannot be empty/i),
    ).toBeInTheDocument()
    expect(await screen.getByTestId('password-error')).toHaveTextContent(
      'password cannot be empty',
    )
    expect(
      await screen.findByText(/confirm password cannot be empty/i),
    ).toBeInTheDocument()
  })
})
