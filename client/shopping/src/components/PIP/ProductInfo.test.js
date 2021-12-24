import { render, screen, fireEvent } from '@testing-library/react';
import ProductInfo from './ProductInfo';

const mockCallback = jest.fn();


const categories= [
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
    }]
// This test will fail due to internal request are not getting handled by jest... Will need to setup a mock server for the same
describe("Check Product Info page", ()=>{
    test('check for number of product', async () => {
        render(<ProductInfo categories={categories} addToCart={mockCallback}/>);
        const cardElement = await screen.findAllByTestId("cardname",undefined,{
            timeout: 5000
          })
        expect(cardElement).toBe(25)
      });
    test('check for item no Change on click', async () => {
        render(<ProductInfo categories={categories} addToCart={mockCallback}/>);
        const cardElement = await screen.findAllByTestId("cardname",undefined,{
            timeout: 5000
          })
        const catElement = screen.getByTestId("categoryTab1");
        fireEvent.click(catElement);
        expect(cardElement).toBe(4)
      });
})
