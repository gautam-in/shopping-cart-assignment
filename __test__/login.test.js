import { render, screen } from '@testing-library/react';
import signIn from '../pages/signIn';
describe("Login test", () => {
    it()
})

test('should show Login form', () => {
    render(<signIn />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveTextContent("")
})