//import { screen, fireEvent, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "../../test-util";

import Cart from "../Cart";

let MockCart = () => {
  return (
    <BrowserRouter>
      <Cart></Cart>
    </BrowserRouter>
  );
};

describe("Cart page test cases", () => {
  test("full app rendering/navigating", async () => {
    render(<MockCart />);
    // verify page content for expected route

    let heading = await screen.findByText(
      /you won't find it cheaper anywhere/i
    );
    expect(heading).toBeInTheDocument();
  });
});
