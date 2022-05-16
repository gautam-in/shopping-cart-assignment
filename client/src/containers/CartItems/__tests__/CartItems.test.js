import { render, screen } from "@testing-library/react";
import { data } from "../Data";
import CartItems from "../CartItems";

describe("CartItems", () => {
    test("should_render_two_cartItem_components", async () => {
      render(
        <CartItems data={data}/>
      );
      expect(screen.queryAllByTestId("cart-item-card").length).toBe(2);
    });
  });