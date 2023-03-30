import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";
import categoriesData from "@/data/categories/index.get.json";
import offerListData from "@/data/banners/index.get.json";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Home categoriesData={categoriesData} offerListData={offerListData} />
    );

    const heading = screen.getByRole("heading", {
      name: /bakery cakes and dairy/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
