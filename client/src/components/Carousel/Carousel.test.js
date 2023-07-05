import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./";

it("Test click next button", () => {
  const banners = [
    {
      id: 1,
      bannerImageUrl: "https://via.placeholder.com/150",
      bannerImageAlt: "Banner 1",
    },
    {
      id: 2,
      bannerImageUrl: "https://via.placeholder.com/150",
      bannerImageAlt: "Banner 2",
    },
  ];
  render(<Carousel banners={banners} />);
  const nextButton = screen.getByRole("button", { name: /next/i });
  fireEvent.click(nextButton);
  const secondBanner = screen.getByAltText("Banner 2");
  expect(secondBanner).toHaveStyle({ zIndex: 4 });
});

it("Test Click dot", () => {
  const banners = [
    {
      id: 1,
      bannerImageUrl: "https://via.placeholder.com/150",
      bannerImageAlt: "Banner 1",
    },
    {
      id: 2,
      bannerImageUrl: "https://via.placeholder.com/150",
      bannerImageAlt: "Banner 2",
    },
  ];
  render(<Carousel banners={banners} />);
  const firstDot = screen.getAllByRole("button")[0];
  fireEvent.click(firstDot);
  console.log(firstDot.style.zIndex);
  const secondBanner = screen.getByAltText("Banner 1");
  expect(secondBanner).toHaveStyle({ zIndex: 4 });
});
