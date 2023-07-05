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

  rest.get("http://localhost:5000/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "ProductItem 1",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          description:
            "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
          price: 87,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-kiwi-3",
          id: "5b6c6a7f01a7c38429530883",
        },
        {
          name: "ProductItem 2",
          imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
          description:
            "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
          price: 187,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-apple-4",
          id: "5b6c6aeb01a7c38429530884",
        },
        {
          name: "ProductItem 3",
          imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
          description:
            "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
          price: 88,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-pomegranate-500",
          id: "5b6c6b7001a7c38429530885",
        },
        {
          name: "ProductItem 4",
          imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
          description:
            "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
          price: 137,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-capsicum-1",
          id: "5b6c6bdc01a7c38429530886",
        },
      ])
    );
  }),
];
