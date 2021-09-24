import React from 'react';
import { screen, render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../redux/store';
import ProductList from '../components/Products/ProductList';
import ProductListData from './testutils/ProductListData.json';

describe('ProductList Tests', () => {
  //
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Provider store={store}>
          <ProductList productsData={ProductListData} />
        </Provider>
      </ChakraProvider>,
    );
  });
  //

  test('Product List should render correctly', () => {
    const productListElement = screen.getByTestId('product-list');
    expect(productListElement).toBeInTheDocument();
  });

  test('ProductList should render correct amount of product card', () => {
    const productCards = screen.getAllByText('Add To Cart');
    expect(productCards).toHaveLength(4);
  });
});
