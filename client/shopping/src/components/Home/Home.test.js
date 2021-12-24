import { render, screen } from '@testing-library/react';
import Home from"./Home"
const props = [{
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.\i",
    "enabled": true,
    "order": 3,
    "imageUrl": "/static/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
  },{
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/static/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
  }]
describe("Home Page Test", ()=>{
    test('check for category Cards', () => {
        render(<Home category={props}/>);
        const SectionElement = screen.getAllByTestId("section")
        expect(SectionElement.length).toBe(2);
      });
})
