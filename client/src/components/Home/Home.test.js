import React from 'react'
import {render, screen, cleanup, act} from '@testing-library/react'
import Home from './Home';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import { BrowserRouter} from 'react-router-dom';
// import store from '../Reducers/index'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

const categoryData = [
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
    {
      "name": "Beauty and Hygiene",
      "key": "beauty-hygiene",
      "description": "Buy beauty and personal care products online in India at best prices.",
      "enabled": true,
      "order": 4,
      "imageUrl": "/static/images/category/beauty.png",
      "id": "5b68994e3d1a866534f516df"
    },
    {
      "name": "Baby Care",
      "key": "baby",
      "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      "enabled": true,
      "order": 5,
      "imageUrl": "/static/images/category/baby.png",
      "id": "5b6899683d1a866534f516e0"
    },
    {
      "name": "Seafood",
      "key": "seafood",
      "description": "Great place to buy fresh seafood.",
      "enabled": false,
      "order": -1,
      "id": "5b68997d3d1a866534f516e1"
    },
    {
      "name": "Fruits & Vegetables",
      "key": "fruit-and-veg",
      "description": "A variety of fresh fruits and vegetables.",
      "enabled": true,
      "order": 1,
      "imageUrl": "/static/images/category/fruits.png",
      "id": "5b6899953d1a866534f516e2"
    }
  ]

const bannerData = [
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
    },
    {
      "bannerImageUrl": "/static/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 3,
      "id": "5b6c38456cb7d770b7010cce"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer4.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
      "isActive": true,
      "order": 4,
      "id": "5b6c38576cb7d770b7010ccf"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer5.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
      "isActive": true,
      "order": 5,
      "id": "5b6c386b6cb7d770b7010cd0"
    }
  ]

jest.mock('axios');

afterEach(cleanup);

describe('Testing Home', () => {

  test('loads and displays Home', async () => {
    // mock api
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: categoryData }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: bannerData }));

    await act(async () => {
      render(
        <Provider store={store}>
           <BrowserRouter>
           <Home />
           </BrowserRouter>
        </Provider>
      )
    })
    //  expect(await screen.findByText(/Beverages/)).toBeInTheDocument();
    expect(await screen.findAllByRole("img")).toHaveLength(19);
    expect(axios.get).toHaveBeenCalledTimes(2);
  })

  test('testing header component in home page....',async ()=>{
      // mock api
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: categoryData }));
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: bannerData }));
    await act(async () => {
      render(
        <Provider store={store}>
              <BrowserRouter>
              <Home />
              </BrowserRouter>
        </Provider>
      )
    })
    expect(await screen.findByText(/Home/)).toBeInTheDocument();
    expect(await screen.findByText(/Products/)).toBeInTheDocument();
    expect(await screen.findByText(/Sign In/)).toBeInTheDocument();
    expect(await screen.findByText(/Register/)).toBeInTheDocument();
  })

})