import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Cart from './index'

describe('Cart Component', () => {
    let cart, onAdd, onDelete, hideCart, props

    beforeAll(() => {
        onAdd = jest.fn((id) => `${id}`)
        onDelete = jest.fn((id) => `${id}`)
        hideCart = jest.fn()
        props = {
            products: [{
                imageSrc: '/images/products/fruit-n-veg/kiwi-green.jpg',
                imageAlt: 'Fresho Kiwi - Green, 3 pcs',
                count: 1,
                price: 87,
                id: 'test',
                name: 'Fresho Kiwi - Green, 3 pcs'
            }],
            onAdd,
            onDelete,
            hideCart,
            totalCount: 1,
            totalCost: 87
        }
        cart = render(<Cart {...props} onAdd={onAdd} onDelete={onDelete} />)
    })

    test('should render correctly', () => {
        expect(cart).toBeTruthy()
    })

    test('should call onAdd correctly', () => {
        const addCart = render(<Cart {...props} />)
        const buttonAdd = addCart.container.querySelector('#testadd')
        fireEvent.click(buttonAdd)
        expect(onAdd).toHaveBeenCalled()
    })

    test('should call onDelete correctly', () => {
        const deleteCart = render(<Cart {...props} />)
        const buttonAdd = deleteCart.container.querySelector('#testdelete')
        fireEvent.click(buttonAdd)
        expect(onDelete).toHaveBeenCalled()
    })

    test('should display proceed to checkout if not empty', () => {
        const nonEmptyCart = render(<Cart {...props} />)
        const buttonText = nonEmptyCart.container.querySelector('#footer-button').innerHTML
        expect(buttonText).toContain('Proceed to Checkout')
    })

    test('should display Start Shopping if empty', () => {
        const emptyCart = render(<Cart {...props} products={[]} totalCost={0} totalCount={0} />)
        const buttonText = emptyCart.container.querySelector('#footer-button').innerHTML
        expect(buttonText).toBe('Start Shopping')
    })
})