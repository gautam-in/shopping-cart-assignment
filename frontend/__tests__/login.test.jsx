import {render, screen} from '@testing-library/react'
import Login from '../pages/login.tsx'
import {renderWithClient} from '../mocks/utils'
import userEvent from '@testing-library/user-event'

describe('Home Page', () => {
  it('testing login ui fields', async () => {
    const result = renderWithClient(<Login />)
    const loginHeading = screen.getByRole('heading', {name: /login/i})
    const loginDescription = screen.getByText(
      /get access to your orders, wishlist and recommendations/i,
    )
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    expect(loginHeading).toBeInTheDocument()
    expect(loginDescription).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
  })
  it('check for required fields', async () => {
    const result = renderWithClient(<Login />)
    userEvent.click(await screen.getByRole('button', {name: /login/i}))
    expect(
      await screen.findByText(/email cannot be empty/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/password cannot be empty/i),
    ).toBeInTheDocument()
  })
})
