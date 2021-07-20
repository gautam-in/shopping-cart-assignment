const productListTemplate = require("../src/js/template/productListTemplate");
describe("productListTemplate.js", function () {
  let state, targetElem;
  beforeAll(function () {
    state = {
      products: {
        productList: [
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
        ],
        filterValue: "5b6c6a7f01a7c38429530883",
      },
      categories: [
        {
          name: "Beverages",
          key: "beverages",
          description:
            "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          enabled: true,
          order: 3,
          imageUrl: "/static/images/category/beverages.png",
          id: "5b675e5e5936635728f9fc30",
        },
        {
          name: "Bakery Cakes and Dairy",
          key: "bakery-cakes-dairy",
          description:
            "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          enabled: true,
          order: 2,
          imageUrl: "/static/images/category/bakery.png",
          id: "5b6899123d1a866534f516de",
        },
      ],
    };

    const markup = productListTemplate.generateMarkup(state);
    targetElem = document.createElement("div");
    targetElem.innerHTML = markup;
  });

  describe("generateMarkup", function () {
    it("generates DOM element for each category", function () {
      expect(
        targetElem.getElementsByClassName("catalouge__filter--item").length
      ).toBe(state.categories.length);
    });

    it("generates DOM element for each category corresponding to the state details", function () {
      const elemArray = [
        ...targetElem.getElementsByClassName("catalouge__filter--item"),
      ];
      const equality = elemArray.every((elem, index) => {
        return elem.innerText == state.categories[index].name;
      });
      expect(equality).toBeTrue;
    });

    it("generates DOM element for each product ", function () {
      expect(targetElem.getElementsByClassName("product__details").length).toBe(
        state.products.productList.length
      );
    });

    it("generates DOM element with all product details", function () {
      expect(
        targetElem.getElementsByClassName("product__details--title")[0]
          .innerHTML
      ).toBe(state.products.productList[0].name);
      expect(
        targetElem.getElementsByClassName("product__details--desc")[0].innerHTML
      ).toBe(state.products.productList[0].description);
      expect(
        targetElem.getElementsByClassName("product__details--price")[0]
          .innerHTML
      ).toBe(`MRP Rs${state.products.productList[0].price}`);
    });
  });
});
