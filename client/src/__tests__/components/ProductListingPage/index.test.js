import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ProductListPage } from '../../../components/ProductListPage'
import { renderWithProviders } from '../../../utils/test-utils';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios;

describe('ProductListPage spec', () => {

  test('ProductListPage render without crash', () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
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
    })

    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          "name": "Beverages",
          "key": "beverages",
          "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          "enabled": true,
          "order": 3,
          "imageUrl": "/static/images/category/beverages.png",
          "id": "5b675e5e5936635728f9fc30"
        },
        {
          "name": "Bakery Cakes and Dairy",
          "key": "bakery-cakes-dairy",
          "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          "enabled": true,
          "order": 2,
          "imageUrl": "/static/images/category/bakery.png",
          "id": "5b6899123d1a866534f516de"
        }
      ]
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductListPage />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/Select Category/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('prduct render without crash', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          "name": "Fresho Kiwi - Green, 3 pcs",
          "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
          "price": 87,
          "stock": 50,
          "category": "5b675e5e5936635728f9fc30",
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
    })

    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          "name": "Beverages",
          "key": "beverages",
          "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          "enabled": true,
          "order": 3,
          "imageUrl": "/static/images/category/beverages.png",
          "id": "5b675e5e5936635728f9fc30"
        },
        {
          "name": "Bakery Cakes and Dairy",
          "key": "bakery-cakes-dairy",
          "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          "enabled": true,
          "order": 2,
          "imageUrl": "/static/images/category/bakery.png",
          "id": "5b6899123d1a866534f516de"
        }
      ]
    });

    await act(async () => {
      renderWithProviders(<ProductListPage />, {
        preloadedState: {
          productCategory: {
            id: '5b675e5e5936635728f9fc30',
            name: 'Beverages'
          },
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
    })

    UserEvent.click(screen.getAllByRole((screen.getByTestId("plp-page-category-mobile"),"button")).at(0));
    await waitFor(() => UserEvent.click(screen.getByTestId('menuitem-bakery-cakes-dairy')));
    fireEvent.click(screen.getAllByTestId('plp-select-category').at(0));
  })
})