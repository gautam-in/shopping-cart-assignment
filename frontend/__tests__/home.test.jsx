import {render, screen} from '@testing-library/react'
import Home, {fetchOffers} from '../pages/index.tsx'
import {QueryClient, QueryClientProvider} from 'react-query'
import {server} from '../mocks/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('Home Page', () => {
  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  const testQueryClient = createTestQueryClient()
  it('renders navigation', async () => {
    render(
      <QueryClientProvider client={testQueryClient}>
        <Home />
      </QueryClientProvider>,
    )
    const home = screen.getByRole('link', {name: /home/i})
    const products = screen.getByRole('link', {name: /products/i})
    const cart = screen.getByRole('link', {name: /0 items in cart/i})
    const beverage = await screen.getByRole('heading', {
      name: /beverages/i,
    })
    console.log(beverage)
    expect(home).toHaveTextContent('Home')
    expect(products).toHaveTextContent('Products')
    expect(cart).toHaveTextContent('0 items')
  })
  it('renders homepage unchanged', () => {
    const {container} = render(
      <QueryClientProvider client={testQueryClient}>
        <Home />
      </QueryClientProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
