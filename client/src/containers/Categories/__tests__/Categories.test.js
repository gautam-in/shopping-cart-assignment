import { render, screen } from "@testing-library/react";
import { data } from "../Data";
import Categories from "../Categories";

describe("Categories", () => {
    test("should_render_two_categories_components", async () => {
      render(
        <Categories data={data}/>
      );
      expect(screen.queryAllByTestId("category-card").length).toBe(5);
    });
  });