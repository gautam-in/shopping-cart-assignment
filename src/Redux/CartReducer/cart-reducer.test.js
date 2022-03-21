import cartActionTypes from "./cart-actiontypes";
import setCartStatus from "./cart-reducer";

describe("set cart status", () => {
  const initialState = {
    show_cart: false,
    cart_items: [],
    cart_error: "",
  };

  const removeCartInitialState = {
    show_cart: false,
    cart_items: [
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
    cart_error: "",
  };

  it("should return the initial state", () => {
    expect(setCartStatus(undefined, {})).toEqual(initialState);
  });

  it("should return the updated status of the cart", () => {
    expect(
      setCartStatus(initialState, {
        type: cartActionTypes.SHOW_CART,
        payload: true,
      })
    ).toEqual({
      show_cart: true,
      cart_items: [],
      cart_error: "",
    });
  });

  it("should return the updated status of the cart items", () => {
    expect(
      setCartStatus(initialState, {
        type: cartActionTypes.ADD_CART,
        payload: {
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
      })
    ).toEqual({
      show_cart: false,
      cart_items: [
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
      cart_error: "",
    });
  });

  it("should return updated cart after removing item from the cart", () => {
    expect(
      setCartStatus(removeCartInitialState, {
        type: cartActionTypes.REMOVE_CART,
        payload: {
          name: "Apple - Washington, Regular, 4 pcs",
          imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
          description:
            "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
          price: 187,
          stock: 50,
          quantity: 1,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-apple-4",
          id: "5b6c6aeb01a7c38429530884",
        },
      })
    ).toEqual({
      show_cart: false,
      cart_items: [],
      cart_error: "",
    });
  });

  it("should return the error faced while perfomring other action on the cart", () => {
    expect(
      setCartStatus(initialState, {
        type: cartActionTypes.ERROR_CART,
        payload: "Items not added inot cart",
      })
    ).toEqual({
      show_cart: false,
      cart_items: [],
      cart_error: "Items not added inot cart",
    });
  });
});
