import {render, screen} from '@testing-library/react'
import Register from '../pages/register.tsx'
import {renderWithClient} from '../mocks/utils'
import userEvent from '@testing-library/user-event'

describe('Home Page', () => {
  it('testing login ui fields', async () => {
    const result = renderWithClient(<Register />)
    const loginHeading = screen.getByRole('heading', {name: /Signup/i})
    const loginDescription = screen.getByText(
      /We do not share your personal details with anyone/i,
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
    const result = renderWithClient(<Register />)
    userEvent.click(await screen.getByRole('button', {name: /signup/i}))
    expect(
      await screen.findByText(/email cannot be empty/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/confirm password cannot be empty/i),
    ).toBeInTheDocument()
  })
})
