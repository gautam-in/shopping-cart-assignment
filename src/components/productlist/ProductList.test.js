import { fireEvent } from "@testing-library/react";
import { Route } from "react-router-dom";
import { customRender } from "../../utils/customMockRender";
import { stubCategoryData, stubProductData } from "../../stubData";
import ProductList from "./ProductList";

describe('Product screen is rendered', () => {
    let container = null;
    beforeEach(() => {
      container = customRender(
        <Route path="/">
          <ProductList />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { productData: stubProductData, categoryData: stubCategoryData } }
        }
      );
    })

    test('single product is loaded on screen', () => {
      const { getByTestId } = container;
      expect(getByTestId('single-product')).toBeInTheDocument();
      expect(getByTestId('buy-now-mobile')).toBeInTheDocument();
      expect(getByTestId('category-list-dropdown')).toBeInTheDocument();
      expect(getByTestId('category-list-section-all')).toBeInTheDocument();
      expect(getByTestId('category-list-section')).toBeInTheDocument();
      fireEvent.click(getByTestId('category-list-section'));
    })

    test('buy now button added item into cart', () => {
      const { getByTestId,getByText } = container;
      fireEvent.click(getByTestId('buy-now'));
      expect(getByText(/item added to cart/i)).toBeInTheDocument();
      expect(getByTestId('buy-now-mobile')).toBeInTheDocument();
      expect(getByText(/item added to cart/i)).toBeInTheDocument();
    })
  })