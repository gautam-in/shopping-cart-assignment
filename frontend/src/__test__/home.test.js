import { screen, render, waitFor } from "@testing-library/react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { renderWithProviders } from "../utilities/utils-for-test";

describe("Banner", () => {
  test("renders list of offers", async () => {
    renderWithProviders(<Banner />);
    const offerItems = await screen.findAllByRole("img");
    expect(offerItems).toHaveLength(5);
  });

  test("renders list of categories", async () => {
    renderWithProviders(<Categories />);
    const categoryItems = await screen.findAllByRole("button");
    expect(categoryItems).toHaveLength(6);
  });
});
