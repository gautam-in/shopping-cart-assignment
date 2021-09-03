import React from "react";
import axios from "../../axios.config";
import { render } from "@testing-library/react";
import { categoriesList, productsList } from "../pages.mock";
import ProductPage, { getServerSideProps } from "../products.page";

jest.mock("../../global/utils/useCart", () => ({
  useCart: () => ({
    addCartItem: () => {},
  }),
}));

jest.mock("../../axios.config", () => ({
  get: jest.fn(),
}));

describe("ProductPage", () => {
  it("should render the component correctly -- desktop", () => {
    const ProductPageComponent = render(
      <ProductPage
        productsList={productsList}
        categoriesList={categoriesList}
      />
    );
    expect(ProductPageComponent).toMatchSnapshot();
  });

  it("should render the component correctly -- mobile", () => {
    const ProductPageComponent = render(
      <ProductPage
        productsList={productsList}
        categoriesList={categoriesList}
        deviceType="MOBILE"
      />
    );
    expect(ProductPageComponent).toMatchSnapshot();
  });

  it("getServerSideProps should run properly", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: productsList })
    );
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: categoriesList })
    );
    const response = await getServerSideProps();
    expect(response).toEqual({
      props: {
        categoriesList,
        productsList,
        deviceType: "DESKTOP",
      },
    });
  });
});
