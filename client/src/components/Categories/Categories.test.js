import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Categories from ".";

it("Tests that CategoryCard is rendered for each category in categories array", () => {
  const categories = [
    {
      id: 1,
      key: "key1",
      name: "category1",
      imageUrl: "image1",
      description: "description1",
    },
    {
      id: 2,
      key: "key2",
      name: "category2",
      imageUrl: "image2",
      description: "description2",
    },
  ];
  const { getAllByRole } = render(
    <BrowserRouter>
      <Categories categories={categories} />
    </BrowserRouter>
  );
  const categoryCards = getAllByRole("section");
  expect(categoryCards.length).toBe(categories.length);
});

it("Tests that Categories component renders correctly when categories array is empty", () => {
  const categories = [];
  const { queryAllByRole } = render(<Categories categories={categories} />);
  const categoryCards = queryAllByRole("section");
  expect(categoryCards.length).toBe(0);
});
