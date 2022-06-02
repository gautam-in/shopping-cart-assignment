//import { screen, fireEvent, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "../../test-util";

import Products from "../Products";

let categoriesData = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "/images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Bakery Cakes and Dairy",
    key: "bakery-cakes-dairy",
    description:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    enabled: true,
    order: 2,
    imageUrl: "/images/category/bakery.png",
    id: "5b6899123d1a866534f516de",
  },
  {
    name: "Beauty and Hygiene",
    key: "beauty-hygiene",
    description:
      "Buy beauty and personal care products online in India at best prices.",
    enabled: true,
    order: 4,
    imageUrl: "/images/category/beauty.png",
    id: "5b68994e3d1a866534f516df",
  },
  {
    name: "Baby Care",
    key: "baby",
    description:
      "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
    enabled: true,
    order: 5,
    imageUrl: "/images/category/baby.png",
    id: "5b6899683d1a866534f516e0",
  },
  {
    name: "Seafood",
    key: "seafood",
    description: "Great place to buy fresh seafood.",
    enabled: false,
    order: -1,
    id: "5b68997d3d1a866534f516e1",
  },
  {
    name: "Fruits & Vegetables",
    key: "fruit-and-veg",
    description: "A variety of fresh fruits and vegetables.",
    enabled: true,
    order: 1,
    imageUrl: "/images/category/fruits.png",
    id: "5b6899953d1a866534f516e2",
  },
];
let productData = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
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
    name: "Apple - Washington, Regular, 4 pcs",
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
    name: "Fresho Pomegrante Peeled, 500 gm ",
    imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
    description:
      "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
    price: 88,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-pomegranate-500",
    id: "5b6c6b7001a7c38429530885",
  },
];

let MockProducts = () => {
  return (
    <BrowserRouter>
      <Products
        categoriesData={categoriesData}
        productData={productData}
      ></Products>
    </BrowserRouter>
  );
};

describe("Products page test cases", () => {
  test("to check if one of the categories is rendered", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findByRole("link", {
      name: /beverages/i,
    });
    expect(linkCompo).toBeInTheDocument();
  });

  test("to check the length of cateegories categories", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findAllByRole("link");

    expect(linkCompo).toHaveLength(5);
  });

  test("to check the length of products categories", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findAllByRole("button");

    expect(linkCompo).toHaveLength(3);
  });

  test("to check if product name is printed", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findByRole("heading", {
      name: /Fresho Kiwi - Green, 3 pcs/i,
    });

    expect(linkCompo).toBeInTheDocument();
  });

  test("to check if product image is printed", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.getByRole("img", {
      name: /Fresho Kiwi - Green, 3 pcs/i,
    });

    expect(linkCompo).toBeInTheDocument();
  });

  test("to check if product description is printed", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findByText(
      /Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds\./i
    );

    expect(linkCompo).toBeInTheDocument();
  });

  test("to check if product MRP is printed", async () => {
    render(<MockProducts />);

    let linkCompo = await screen.findByRole("heading", {
      name: /mrp rs 87/i,
    });

    expect(linkCompo).toBeInTheDocument();
  });

  // test("to check if cart is incremented when Buy Now is clicked", async () => {
  //   render(<MockProducts />);

  //   let linkCompo = await screen.getByRole("heading", {
  //     name: /0 items/i,
  //   });

  //   expect(linkCompo).toBeInTheDocument();
  // });
});
