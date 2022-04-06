import { render, screen } from "../../test-utils/testing-library-utils";

import Categories from "./index";

test("displays image for each category data response from server", async () => {
  render(<Categories />, {
    preloadedState: {},
  });

  // find images
  const categoryimages = await screen.findAllByRole("img");
  expect(categoryimages).toHaveLength(3);

  // confirm alt text of images
  const altText = categoryimages.map((element) => element.alt);
  expect(altText).toEqual([
    "Bakery Cakes and Dairy",
    "Beverages",
    "Beauty and Hygiene",
  ]);
});
