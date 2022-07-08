import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../../components/Header'
import { store } from '../../../redux/store';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Header spec', () => {

  test('Header render without crash', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        productCarts: [
          {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
          },
          {
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884"
          }
        ]
      }
    })
    const linkElement = screen.getByText(/SignIn/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Header render without crash', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        productCarts: [
          {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
          }]
      }
    })
    fireEvent.click(screen.getByTestId('cart-icon-container'))
  });

  test('Header render without crash', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId('cart-icon-container'))
    fireEvent.click(screen.getByTestId('mini-cart-close'))
  })
});
