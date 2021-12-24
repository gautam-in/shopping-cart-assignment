import { render, screen, fireEvent } from '@testing-library/react';
import Categories from"./Categories"

const mockCallback = jest.fn();

const Products = [
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

describe("Check CategoryTab", ()=>{
    test('check for Buy now Buttons', () => {
        render(<Categories categories={Products} setProdCategory={mockCallback}/>);
        const CategoriesElement = screen.getAllByTestId(/categoryTab/i)
        expect(CategoriesElement.length).toBe(2)
      });
    test('check for Text Change on click', () => {
        render(<Categories categories={Products} setProdCategory={mockCallback}/>);
        const currentElement = screen.getByTestId("categoryCurrent")
        const catElement = screen.getByTestId("categoryTab1");
        fireEvent.click(catElement);
        expect(currentElement).toHaveTextContent("Bakery Cakes and Dairy");
      });
})
