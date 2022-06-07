import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import store from "../redux/Store";

export const renderStore = (children) =>
  render(
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
describe("Layout Component", () => {
  test("renders Header", () => {
    renderStore(<MainLayout />);
    const headerElement = screen.getByRole("header");

    expect(headerElement).toBeInTheDocument();
  });

  test("renders footer", () => {
    renderStore(<MainLayout />);
    const footerElement = screen.getByRole("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
