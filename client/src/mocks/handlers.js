import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/categories", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Category 1",
          key: "beverages",
          description:
            "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          enabled: true,
          order: 3,
          imageUrl: "/static/images/category/beverages.png",
          id: "5b675e5e5936635728f9fc30",
        },
        {
          name: "Category 2",
          key: "bakery-cakes-dairy",
          description:
            "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          enabled: true,
          order: 2,
          imageUrl: "/static/images/category/bakery.png",
          id: "5b6899123d1a866534f516de",
        },
      ])
    );
  }),

  rest.get("http://localhost:5000/banners", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          bannerImageUrl: "/static/images/offers/offer1.jpg",
          bannerImageAlt: "Banner 1",
          isActive: true,
          order: 1,
          id: "5b6c38156cb7d770b7010ccc",
        },
        {
          bannerImageUrl: "/static/images/offers/offer2.jpg",
          bannerImageAlt: "Banner 2",
          isActive: true,
          order: 2,
          id: "5b6c38336cb7d770b7010ccd",
        },
      ])
    );
  }),
];
