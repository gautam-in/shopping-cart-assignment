import { render } from "@testing-library/react";
import CategoriesMenu from "./CategoriesMenu";
describe("CategoriesMenu component", () => {
  it("should match snapshot", () => {
    const mockProps = {
      data: [
        {
          name: "Beverages",
          key: "beverages",
          description:
            "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          enabled: true,
          order: 3,
          imageUrl: "/static/images/category/beverages.webp",
          id: "5b675e5e5936635728f9fc30",
        },
        {
          name: "Bakery Cakes and Dairy",
          key: "bakery-cakes-dairy",
          description:
            "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          enabled: true,
          order: 2,
          imageUrl: "/static/images/category/bakery.webp",
          id: "5b6899123d1a866534f516de",
        },
        {
          name: "Beauty and Hygiene",
          key: "beauty-hygiene",
          description:
            "Buy beauty and personal care products online in India at best prices.",
          enabled: true,
          order: 4,
          imageUrl: "/static/images/category/beauty.webp",
          id: "5b68994e3d1a866534f516df",
        },
      ],
      isLoading: false,
      selectCategoryId: "",
    };
    const container = render(<CategoriesMenu data={mockProps.data} />);
    expect(container).toMatchSnapshot();
  });
});
