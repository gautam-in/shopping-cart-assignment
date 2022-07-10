import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("Header", () => {
  test("contains logo", async () => {
    render(
      <BrowserRouter>
        <Header cartCounter={0} />
      </BrowserRouter>
    );
    expect(await screen.findByAltText(/sabka bazaar logo/i)).toHaveAttribute(
      "src",
      "logo.png"
    );
  });

  test("contains navigation link - home, product, signin, and register", async () => {
    render(
      <BrowserRouter>
        <Header cartCounter={0} />
      </BrowserRouter>
    );
    const homeLink = screen.getAllByRole("link", { name: /home/i });
    const signinLink = screen.getAllByRole("link", { name: /sign in/i });
    const registerLink = screen.getAllByRole("link", { name: /register/i });
    const productLink = screen.getAllByRole("link", { name: /products/i });

    // Checking all home link's have proper href and name
    homeLink.forEach((item) => {
      expect(item).toHaveAttribute("href", "/");
    });
    // Checking all sign in link's have proper href and name
    signinLink.forEach((item) => {
      expect(item).toHaveAttribute("href", "/signin");
    });
    // Checking all sign in register link's have proper href and name
    registerLink.forEach((item) => {
      expect(item).toHaveAttribute("href", "/register");
    });
    //   Checking product link have proper href and name;
    productLink.forEach((item) => {
      expect(item).toHaveAttribute("href", "/products");
    });
  });

  test("Contains cart button", () => {
    render(
      <BrowserRouter>
        <Header cartCounter={0} />
      </BrowserRouter>
    );
    const cartBtn = screen.getByTestId("cart-button");
    expect(cartBtn).toBeInTheDocument();
  });

  test("Contains active class when cart button is clicked", () => {
    render(
      <BrowserRouter>
        <Header cartCounter={0} />
      </BrowserRouter>
    );
    const cartBtn = screen.getByTestId("cart-button");
    userEvent.click(cartBtn).then(() => {
      expect(cartBtn).toHaveAttribute("class", /active/i);
    });
  });
});
