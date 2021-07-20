const homeTemplate = require("../src/js/template/homeTemplate");
describe("homeTemplate.js", function () {
  describe("generateMarkup", function () {
    let state, targetElem, itemsWithZeroQuantity, itemsWithQuantity;
    beforeAll(function () {
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
      const markup = homeTemplate.generateMarkup(state);
      targetElem = document.createElement("div");
      targetElem.innerHTML = markup;
      offersElements = [
        ...targetElem.getElementsByClassName("category__offers--banner"),
      ];

      categoryElements = [
        ...targetElem.getElementsByClassName("category__item"),
      ];
    });
    it("generates DOM element for each offer banners", function () {
      expect(offersElements.length).toBe(state.offers.length);
    });
    it("renders offer image with the  url for each offer banners", function () {
      offersElements.every((elem, index) => {
        const imgElem = elem.getElementsByTagName("img")[0];
        const imgUrl = imgElem.src.split("/").slice(3).join("/");
        expect(state.offers[index].bannerImageUrl == "/" + imgUrl).toBe(true);
      });
    });
    it("renders category markup for each category ", function () {
      expect(categoryElements.length).toBe(state.categories.length);
    });

    it("renders category title markup as per the title in category details", function () {
      categoryElements.every((elem, index) => {
        const titleElem = elem.getElementsByClassName("category-title")[0];

        expect(titleElem.innerHTML.trim()).toBe(state.categories[index].name);
      });
    });
    it("renders category description markup as per the description in category details", function () {
      categoryElements.every((elem, index) => {
        const titleElem = elem.getElementsByClassName("category-descr")[0];

        expect(titleElem.innerText.trim()).toBe(
          state.categories[index].description.trim()
        );
      });
    });
    it("renders category description markup as per the description in category details", function () {
      categoryElements.every((elem, index) => {
        const imgElem = elem.querySelector(
          ".category__item__details--image img"
        );
        const imgUrl = imgElem.src.split("/").slice(3).join("/");
        expect(`/${imgUrl}`).toBe(`${state.categories[index].imageUrl}`);
      });
    });
  });
});
