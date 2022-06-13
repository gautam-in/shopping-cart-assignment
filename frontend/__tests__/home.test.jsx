import {render, screen} from '@testing-library/react'
import Home from '../pages/index.tsx'
import {server} from '../mocks/server'
import {renderWithClient} from '../mocks/utils'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('Home Page', () => {
  it('renders navigation', async () => {
    const result = renderWithClient(<Home />)

    const home = result.getByRole('link', {name: /home/i})
    const products = result.getByRole('link', {name: /products/i})
    const cart = result.getByRole('link', {name: /0 items in cart/i})

    expect(await result.findByText(/explore beverages/i)).toBeInTheDocument()
    expect(home).toHaveTextContent('Home')
    expect(products).toHaveTextContent('Products')
    expect(cart).toHaveTextContent('0 items')
    expect(await screen.findByText(/Explore beverages/)).toBeInTheDocument()
    expect(await screen.findAllByRole('img')).toHaveLength(3)
  })
  it('check for navigation links', async () => {
    const result = renderWithClient(<Home />)

    const home = result.getByRole('link', {name: /home/i})
    const products = result.getByRole('link', {name: /products/i})
    const cart = result.getByRole('link', {name: /0 items in cart/i})

    expect(home).toHaveAttribute('href', '/')
    expect(products).toHaveAttribute('href', '/products')
    expect(cart).toHaveAttribute('href', '/cart')
  })
  it('renders homepage unchanged', () => {
    const result = renderWithClient(<Home />)

    expect(result).toMatchSnapshot()
  })
})
