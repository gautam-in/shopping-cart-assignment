import { render, screen } from "../../test-utils/testing-library-utils";

import Products from "./index";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("displays image for each product data obtained from server", async () => {
  render(<Products />, {
    preloadedState: {
      productList: [],
    },
  });

  // find images
  const productImages = await screen.findAllByRole("img");
  expect(productImages).toHaveLength(2);

  // confirm alt text of images
  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual([
    "Fresho Kiwi - Green, 3 pcs",
    "Apple - Washington, Regular, 4 pcs",
  ]);
});
