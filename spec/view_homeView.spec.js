const homeView = require("../src/js/view/homeView");
describe("productListView.js", function () {
  let state;
  $("body").append("<div class='main'></div>");
  describe("renderDOM", function () {
    beforeEach(function () {
      state = {
        offers: [
          {
            bannerImageUrl: "/static/images/offers/offer1.jpg",
            bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
            isActive: true,
            order: 1,
            id: "5b6c38156cb7d770b7010ccc",
          },
          {
            bannerImageUrl: "/static/images/offers/offer2.jpg",
            bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
            isActive: true,
            order: 2,
            id: "5b6c38336cb7d770b7010ccd",
          },
        ],
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
    it("Updates the window hash value when a category is clicked", async function () {
      homeView._parentElement = document.querySelector(".main");
      spyOn(homeView, "_initializeCarousel");
      await homeView.renderDOM(state);
      $(".category-action")[0].click();
      // console.log($(".category-action"));

      let url = new URL($(".category-action")[0].parentElement.href);
      hash = url.hash;
      expect(window.location.hash).toBe(hash);
    });
  });
});
