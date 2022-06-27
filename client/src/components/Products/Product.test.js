import { fireEvent, render, screen } from '@testing-library/react';
import Product from '../Products/Product';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
import { MemoryRouter } from 'react-router-dom';
const mockStore = configureStore([thunk]);
//const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

const reduxStore = mockStore({
    CategoryReducer: {
        loading: 'true',
        data: [
            {
                name: 'Beverages',
                key: 'beverages',
                description: 'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
                enabled: true,
                order: 3,
                imageUrl: '/static/images/category/beverages.png',
                id: '5b675e5e5936635728f9fc30'
            },
            {
                name: "Bakery Cakes and Dairy",
                key: "bakery-cakes-dairy",
                description: "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
                enabled: true,
                order: 2,
                imageUrl: "/static/images/category/bakery.png",
                id: "5b6899123d1a866534f516de"
            }

        ],
        error: "",

        updatedSelectedCategory: {
            categoryId: "5b675e5e5936635728f9fc30",
        }
    },
    ProductListReducer: {
        loading: 'true',
        data: [{
            name: "Epigamia Greek Yogurt - Strawberry, 90 gm",
            imageURL: "/static/images/products/bakery-cakes-dairy/yogurt-red.jpg",
            description: "Low Fat and High protein delicious and thick Greek Yogurt.",
            price: 40,
            stock: 50,
            category: "5b6899123d1a866534f516de",
            sku: "bcd-yogurt-red",
            id: "5b6c6dd701a7c3842953088b",
            quantity: 1
        }],
        error: ""

    },
    CartReducer: {

        loading: true,
        data: [],
        error: "",


        cartList: {
            cartItems: [],
            totalItems: 0,
            cartItemAdded: false,
        },
        cartOpen: false
    }


});




describe("should load Productcomponent", () => {
test('render all the sub product items', () => {


        render(
            <Provider store={reduxStore}>
                <MemoryRouter>
                <Product />
                </MemoryRouter>
            </Provider>
        )

    });
  
})
