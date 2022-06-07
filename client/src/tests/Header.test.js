import { screen } from "@testing-library/react";
import { renderStore } from "./MainLayout.test";
import Header from "../components/mainLayout/header/Header";

describe("Header Elements", () => {
  test("Renders Home, Products, Logo and Cart Links", () => {
    renderStore(<Header />);
    screen.getByRole("link", { name: "Home" });
    screen.getByRole("link", { name: "Products" });
    screen.getByAltText("cart");
    screen.getByAltText("logo");
  });

  test("href attributes for links in Header", () => {
    renderStore(<Header />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByAltText("cart").closest("a")).toHaveAttribute(
      "href",
      "/cart"
    );
    expect(screen.getByAltText("logo").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
