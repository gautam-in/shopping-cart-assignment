const productListView = require("../src/js/view/productListView");
describe("productListView.js", function () {
  let state;
  $("body").append("<div class='main'>How are you</div>");
  describe("renderDOM", function () {
    beforeEach(function () {
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
    });
    afterEach(function () {
      $(".main").html("");
    });
    it("renders the calalouge filter in the DOM", function () {
      productListView._parentElement = document.querySelector(".main");
      productListView.renderDOM(state);
      expect($(".catalouge__filter")).toBeInDOM();
    });
    it("renders the calalouge filter for each category item", function () {
      productListView._parentElement = document.querySelector(".main");
      productListView.renderDOM(state);
      expect($(".catalouge__filter--item")).toHaveLength(
        state.categories.length
      );
    });
  });
  describe("addToCartHandler", function () {
    beforeEach(function () {
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
    });
    afterEach(function () {
      $(".main").html("");
    });
    it("attaches event handler to capture click on Buy Now Button", async function () {
      let productId;
      let handler = function (Id) {
        productId = Id;
      };
      productListView._parentElement = document.querySelector(".main");
      await productListView.renderDOM(state);
      productListView.addToCartHandler(handler);

      var spyEvent = spyOnEvent(".buy-now", "click");
      $(".buy-now")[0].click();
      expect("click").toHaveBeenTriggeredOn(".buy-now");
      expect(spyEvent).toHaveBeenTriggered();

      expect(productId).toBe($(".buy-now")[0].dataset.productId);
    });
  });
});
