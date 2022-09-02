import reducer, { addToCartSuccess, updateCart } from "./slice";

describe("cart slice", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isAddToCartSuccess: false,
      addToCartLoading: true,
      error: "",
      cart: [],
    });
  });
  it("should get cart items and add to existing state", () => {
    const previousState = {};
    const mockCartItems = [
      {
        name: "Fresho Pomegrante Peeled, 500 gm ",
        id: "5b6c6b7001a7c38429530885",
        imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
        description:
          "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
        price: 88,
        quantity: 1,
      },
      {
        name: "Capsicum - Green, 1 kg",
        id: "5b6c6bdc01a7c38429530886",
        imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
        description:
          "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
        price: 137,
        quantity: 1,
      },
    ];
    expect(reducer(previousState, addToCartSuccess(mockCartItems))).toEqual({
      ...previousState,
      cart: mockCartItems,
      isAddToCartSuccess: true,
    });
  });

  it("should update cart items and add to existing state", () => {
    const previousState = {};
    const mockCartItems = [
      {
        name: "Fresho Pomegrante Peeled, 500 gm ",
        id: "5b6c6b7001a7c38429530885",
        imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
        description:
          "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
        price: 88,
        quantity: 1,
      },
      {
        name: "Capsicum - Green, 1 kg",
        id: "5b6c6bdc01a7c38429530886",
        imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
        description:
          "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
        price: 137,
        quantity: 1,
      },
    ];
    expect(reducer(previousState, updateCart(mockCartItems))).toEqual({
      ...previousState,
      cart: mockCartItems,
    });
  });
});
