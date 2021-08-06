import { cleanup, fireEvent, waitFor } from "@testing-library/react";
import { Route } from "react-router-dom";
import { customRender } from "../../utils/customMockRender";
import { stubCategoryData, stubProductData } from "../../stubData";
import ProductList from "./ProductList";
import axios from "axios";

const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)

describe('Product screen is rendered', () => {
  let container = null;
  beforeEach(() => {
    container = customRender(
      <Route path="/">
        <ProductList />
      </Route>,
      {
        route: '/',
        initialState: { TestReducer: { productData: [], categoryData: stubCategoryData } }
      }
    );
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: stubProductData }),
    )
  })

  afterEach(()=>{
    cleanup();
  })

  test('single product is loaded on screen', async () => {
    const { getAllByTestId } = container;
    await waitFor(() => expect(getAllByTestId('single-product')[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByTestId('buy-now-mobile')[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByTestId('category-list-section-all')[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByTestId('category-list-dropdown')[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByTestId('category-list-section')[0]).toBeInTheDocument());
  })

  test('buy now button adds item into cart', async () => {
    const { getAllByTestId, getByText } = container;
    await waitFor(() => expect(getAllByTestId('buy-now-mobile')[0]).toBeInTheDocument());
    fireEvent.click(getAllByTestId('buy-now')[0]);
    expect(getByText(/item added to cart/i)).toBeInTheDocument();
    fireEvent.click(getAllByTestId('buy-now-mobile')[0]);
    expect(getByText(/item added to cart/i)).toBeInTheDocument();
  })
})