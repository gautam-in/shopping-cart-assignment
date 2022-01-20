import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Footer from './index'

describe('Footer Component', () => {

    test('should render correctly', () => {
        const footer = render(<Footer />)
        expect(footer).toBeTruthy()
    })

    test('should contain copyright info', () => {
        const footer = render(<Footer />)
        const text = footer.container.querySelector('p').innerHTML
        expect(text).toContain('Copyright')
    })

    test('should contain site info', () => {
        const footer = render(<Footer />)
        const text = footer.container.querySelectorAll('p')[1].innerHTML
        expect(text).toContain('Sabka Bazaar Grocery Supplies Pvt Ltd')


    })
})