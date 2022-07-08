import { render, screen, waitFor } from '@testing-library/react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../../../components/HomePage'
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios;
describe('HomePage spec', () => {
    test('HomePage render without crash', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: [
                {
                    "bannerImageUrl": "/static/images/offers/offer1.jpg",
                    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
                    "isActive": true,
                    "order": 1,
                    "id": "5b6c38156cb7d770b7010ccc"
                }]
        })
        mockedAxios.get.mockResolvedValueOnce({
            data: [
                {
                    "name": "Beverages",
                    "key": "beverages",
                    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
                    "enabled": true,
                    "order": 1,
                    "imageUrl": "/static/images/category/beverages.png",
                    "id": "5b675e5e5936635728f9fc30"
                },
                {
                    "name": "Beverages",
                    "key": "beverages-1",
                    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
                    "enabled": true,
                    "order": 2,
                    "imageUrl": "/static/images/category/beverages.png",
                    "id": "5b675e5e5936635728f9fc301"
                }
            ]
        })

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        );
        await waitFor(()=>{
            expect(screen.getAllByTestId('banner-item').at(0)).toBeInTheDocument();
        })
    });
})