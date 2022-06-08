import { screen } from "@testing-library/react";
import HomePage from "../components/home/homePage";
import { renderStore } from "./MainLayout.test";
describe("Home Page Api Calls", () => {
  test("Fetching Categories list", async () => {
    renderStore(<HomePage />);
    const categoriesImages = await screen.findAllByRole("img", {
      name: /category/i,
    });
    expect(categoriesImages).toHaveLength(2);
  });
  test("Each Category Item is rendered with Link", async () => {
    renderStore(<HomePage />);
    const categoriesLinks = await screen.findAllByRole("link", {
      children: /Explore$/i,
    });
    expect(categoriesLinks).toHaveLength(2);
  });
});
