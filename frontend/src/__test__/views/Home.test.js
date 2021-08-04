import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CategoryContext } from '../../context/ProductCategoryContext';
import Home from '../../views/Home';

//jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');

const categoryData = [
  {
    name: 'Beverages',
    key: 'beverages',
    description:
      'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
    enabled: true,
    order: 3,
    imageUrl: '/static/images/category/beverages.png',
    id: '5b675e5e5936635728f9fc30',
  },
  {
    name: 'Bakery Cakes and Dairy',
    key: 'bakery-cakes-dairy',
    description:
      'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
    enabled: true,
    order: 2,
    imageUrl: '/static/images/category/bakery.png',
    id: '5b6899123d1a866534f516de',
  },
];

describe('Test the Home component as view', () => {
  it('renders the HomeItems component', () => {
    // const component = renderer.create(<Home categoryData={categoryData} />);
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    console.log('TEST', categoryData);
    const element = new TestRenderer.create(
      (
        <CategoryContext.Provider value={categoryData}>
          <Home />
        </CategoryContext.Provider>
      )
    );
    expect(element.root.findByType('div').children).toEqual(categoryData);
  });
});
