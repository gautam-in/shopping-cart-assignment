const cartTemplate = require("../src/js/template/cartTemplate");
describe("cartTemplate.js", function () {
  describe("generateMarkup", function () {
    let state, targetElem, itemsWithZeroQuantity, itemsWithQuantity;
    beforeAll(function () {
      state = {
        cart: {
          "5b6c6a7f01a7c38429530883": {
            quantity: 1,
            name: "Fresho Kiwi - Green, 3 pcs",
            imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            description:
              "Kiwis are oval shaped with a brownish outer skin.  green and juicy with tiny, edible black seeds.",
            price: 87,
          },
          "5b6c6aeb01a7c38429530884": {
            quantity: 1,
            name: "Apple - Washington, Regular, 4 pcs",
            imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
            description:
              "The bright red coloured and heart shaped Washingto…s are a natural source of fibre and are fat free.",
            price: 187,
          },
          "5b6c6b7001a7c38429530885": {
            quantity: 0,
            name: "Fresho Pomegrante Peeled, 500 gm ",
            imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
            description:
              "Pomegranate variety has a glossy, vibrant and soft…ivided into compartments by thin white membranes.",
            price: 88,
          },
        },
      };
      itemsWithZeroQuantity = Object.values(state.cart).filter(
        (item) => item.quantity == 0
      );

      itemsWithQuantity = Object.values(state.cart).filter(
        (item) => item.quantity > 0
      );
      const markup = cartTemplate.generateMarkup(state);
      targetElem = document.createElement("div");
      targetElem.innerHTML = markup;
    });
    it("generates DOM element for each cart item with quantity greater than 0", function () {
      expect(targetElem.getElementsByClassName("cart__item").length).toBe(
        itemsWithQuantity.length
      );
    });

    it("generates DOM element with ITEM NAME as per the cart details", function () {
      const itemArray = [...targetElem.getElementsByClassName("cart__item")];
      const equality = itemArray.every((elem, index) => {
        return (
          elem.getElementsByClassName("cart__item--title")[0].innerText ==
          itemsWithQuantity[index].name
        );
      });
      expect(equality).toBeTrue;
    });

    it("generates DOM element with ITEM PRICE as per the cart details", function () {
      const itemArray = [...targetElem.getElementsByClassName("cart__item")];
      const equality = itemArray.every((elem, index) => {
        return (
          elem.getElementsByClassName("cart__item--rate")[0].innerText ==
          "Rs." + itemsWithQuantity[index].price
        );
      });
      expect(equality).toBeTrue;
    });
    it("renders the item cost based on the item quantity and its rate", function () {
      const itemArray = [...targetElem.getElementsByClassName("cart__item")];
      let equality = false;
      equality = itemArray.every((elem, index) => {
        const itemCount = Number(
          elem.getElementsByClassName("cart__item--count")[0].innerHTML.trim()
        );
        const itemRate = elem
          .getElementsByClassName("cart__item--rate")[0]
          .innerHTML.trim()
          .slice(3);

        return (
          elem.getElementsByClassName("cart__item--cost")[0].innerText ==
          "Rs." + itemCount * itemRate
        );
      });
      expect(equality).toBe(true);
    });

    it("renders the Checkout cost based on the total item quantity and its rate", function () {
      const itemArray = [...targetElem.getElementsByClassName("cart__item")];
      let equality = false;
      let totalCheckoutCost = itemsWithQuantity.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
      expect(
        targetElem.getElementsByClassName("cart__checkout--cost")[0]
          .innerText == totalCheckoutCost
      ).toBe(true);
    });
  });
});
