import { render, screen } from "@testing-library/react";
import { data } from "../Data";
import Products from "../Products";

describe("Products", () => {
    test("should_render_six_product_components", async () => {
     /* two products components on mobile */
     /* two products components on desktop */
     /* two products components on tablet */
      render(
        <Products data={data}/>
      );
      expect(screen.queryAllByTestId("product-card").length).toBe(6);
    });
  });