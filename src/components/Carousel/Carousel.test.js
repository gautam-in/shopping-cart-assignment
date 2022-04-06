import { render, screen } from "../../test-utils/testing-library-utils";

import Carousel from "./index";

test("displays image for each carousel data coming from server", async () => {
  render(<Carousel />, {
    preloadedState: {},
  });

  // find images
  const carouselImages = await screen.findAllByRole("img");
  expect(carouselImages).toHaveLength(3);

  // confirm alt text of images
  const altText = carouselImages.map((element) => element.alt);
  expect(altText).toEqual([
    "Independence Day Deal - 25% off on shampoo",
    "Independence Day Deal - Rs120 off on surf",
    "Independence Day Deal - Rs99 off on domex",
  ]);
});
