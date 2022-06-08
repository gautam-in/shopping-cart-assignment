import React from 'react'
import {render, screen, cleanup, act} from '@testing-library/react'
import Home from './Home'
import { Provider } from 'react-redux'
import store from '../../store'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

const banners = [
  {
    "bannerImageUrl": "/static/images/offers/offer1.jpg",
    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
    "isActive": true,
    "order": 1,
    "id": "5b6c38156cb7d770b7010ccc"
  },
  {
    "bannerImageUrl": "/static/images/offers/offer2.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    "isActive": true,
    "order": 2,
    "id": "5b6c38336cb7d770b7010ccd"
  }
]

const categories = [
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
  },
];

jest.mock('axios');

afterEach(cleanup);

describe('Testing Home', () => {

  test('loads and displays Home', async () => {
    // mock api
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: banners }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: categories }));

    await act(async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      )
    })

    expect(await screen.findByText(/Beverages/)).toBeInTheDocument();
    expect(await screen.findByText(/Bakery Cakes and Dairy/)).toBeInTheDocument();
    expect(await screen.findByText(/Our beverage department will ensure your/)).toBeInTheDocument();
    expect(await screen.findByText(/Explore beverages/)).toBeInTheDocument();
    expect(await screen.findByText(/Explore bakery-cakes-dairy/)).toBeInTheDocument();
    expect(await screen.findAllByRole("img")).toHaveLength(4);
    expect(axios.get).toHaveBeenCalledTimes(2);
  })

})
