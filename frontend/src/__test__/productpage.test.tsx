import { render, screen } from "@testing-library/react";

import ProductPage from "@/pages/product/index";
import categoriesData from "@/data/categories/index.get.json";
import productsData from "@/data/products/index.get.json";

jest.mock("next/router", () => require("next-router-mock"));

describe("Products", () => {
  it("renders a link", () => {
    render(
      <ProductPage
        categoriesData={categoriesData}
        productsData={productsData}
      />
    );

    const link = screen.getByRole("link", {
      name: /fruits & vegetables/i,
    });
    expect(link).toBeInTheDocument();
  });
});
