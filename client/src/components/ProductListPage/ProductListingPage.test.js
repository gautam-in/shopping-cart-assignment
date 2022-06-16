import React from 'react'
import {render, screen, cleanup, act} from '@testing-library/react'
import ProductListingPage from './ProductListingPage';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from '../Reducers/index';
const store = createStore(reducers);
import { BrowserRouter} from 'react-router-dom';
// import store from '../Reducers/index'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

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

const products = [
  {
    "name": "Tata Tea Gold Leaf Tea, 500 gm",
    "imageURL": "/static/images/products/beverages/tata-tea.jpg",
    "description": "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
    "price": 165,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "bev-tata-tea-500",
    "id": "5b6c6f4a01a7c3842953088c"
  },
  {
    "name": "Red Label Tea, 500 gm Carton",
    "imageURL": "/static/images/products/beverages/red-label.jpg",
    "description": "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.",
    "price": 205,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "bev-red-label-500",
    "id": "5b6c6f8301a7c3842953088d"
  },
  {
    "name": "Sandwich Bread - White, Chemical Free, 400 gm",
    "imageURL": "/static/images/products/bakery-cakes-dairy/bread.jpg",
    "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
    "price": 32,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-bread-400",
    "id": "5b6c6d3201a7c38429530888"
  },
  {
    "name": "Organic Fresh Paneer, 200 gm",
    "imageURL": "/static/images/products/bakery-cakes-dairy/paneer.jpg",
    "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been certified organic for over 8 years. All feed is naturally grown with no pesticides or fertilizers.",
    "price": 98,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-paneer-200",
    "id": "5b6c6d6201a7c38429530889"
  },
];

jest.mock('axios');

afterEach(cleanup);

describe('Testing ProductsList', () => {

  test('loads and displays ProductsList', async () => {
    // mock api
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: categories }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }));

    await act(async () => {
      render(
        <Provider store={store}>
           <BrowserRouter>
           <ProductListingPage />
           </BrowserRouter>
        </Provider>
      )
    })

    // expect(await screen.findAllByText(/Beverages/)).toHaveLength(2);
    expect(await screen.findByText(/Red Label Tea, 500 gm Carton/)).toBeInTheDocument();
    // expect(await screen.findByText('MRP Rs.205')).toBeInTheDocument();
    expect(await screen.findByText(/Organic Fresh Paneer, 200 gm/)).toBeInTheDocument();
    expect(await screen.findAllByRole("img")).toHaveLength(6);
    expect(axios.get).toHaveBeenCalledTimes(2);
    const buyButtons = await screen.findAllByText('Buy Now')
    expect(buyButtons[0]).toBeInTheDocument()
  })

  test('display beverages category products', async () => {
    // mock api
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: categories }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }));

    await act(async () => {
      render(
        <Provider store={store}>
              <BrowserRouter>
              <ProductListingPage />
              </BrowserRouter>
        </Provider>
      )
    })
    // const beveragesCategories = await screen.findAllByText(/Beverages/)
  })
  test('testing header component in plp page....',async ()=>{
      // mock api
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: categories }));
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }));
    await act(async () => {
      render(
        <Provider store={store}>
              <BrowserRouter>
              <ProductListingPage />
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