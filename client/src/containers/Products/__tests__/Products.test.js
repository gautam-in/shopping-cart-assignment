import { render, screen } from "@testing-library/react";
import { data } from "../Data";
import Products from "../Products";

describe("Products", () => {
    test("should_render_fifteen_product_components", async () => {
     /* five products components on mobile */
     /* five products components on desktop */
     /* five products components on tablet */
      render(
        <Products data={data}/>
      );
      expect(screen.queryAllByTestId("product-card").length).toBe(15);
    });
  });