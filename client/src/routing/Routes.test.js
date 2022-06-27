import { render, screen } from '@testing-library/react';
import Routes from '../routing/Routes';
import { Provider } from 'react-redux';
import * as reactRedux from "react-redux"
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

            ], 
            error: "",
        
        updatedSelectedCategory: {
            categoryId: "5b675e5e5936635728f9fc30",
        }
    },
    ProductListReducer: {
        loading: 'true',
        data: [],
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





describe("should load all routes", () => {
    test('render Routes for all the correct urls', () => {


        render(
            <Provider store={reduxStore}>
                <MemoryRouter>
                    <Routes />
                </MemoryRouter>
            </Provider>
        )

    });

    test('render No Page Cpmponent for not configured url', () => {


        render(
            <Provider store={reduxStore}>
                <MemoryRouter>
                    <Routes />
                </MemoryRouter>
            </Provider>
        )

    });

    


})
