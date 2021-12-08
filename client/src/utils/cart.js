import { ToastContainer, toast } from "react-toastify";
export const addToCart = (product) => {
  let storageUserData = localStorage.getItem("userData");
  const parsedUserdata = JSON.parse(storageUserData);

  let userId;
  if (parsedUserdata) {
    userId = parsedUserdata.id;
  } else {
    toast("Please login before buying!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });
    <ToastContainer />;
    return false;
  }

  const cart = localStorage.getItem("cart");
  let payload;
  if (cart) {
    let parsedCartData = JSON.parse(cart);
    let userCart = [];
    let nonUserCartData = {};

    for (let key in parsedCartData) {
      if (key == userId) {
        userCart = parsedCartData[key];
      } else {
        nonUserCartData[key] = parsedCartData[key];
      }
    }
    if (userCart.length) {
      console.log("userCart", userCart);
      let existingCartItem = userCart.find((item) => item.id == product.id);
      let notExistingCartItems = userCart.filter(
        (item) => item.id != product.id
      );

      console.log("existingCartItem", existingCartItem);
      console.log("notExistingCartItems", notExistingCartItems);
      if (existingCartItem) {
        payload = [
          ...notExistingCartItems,
          {
            ...existingCartItem,
            count: existingCartItem.count + 1,
          },
        ];
        console.log("ljkljl", payload);
      } else {
        payload = [
          ...notExistingCartItems,
          {
            ...product,
            userId: userId,
            count: 1,
          },
        ];
      }
    } else {
      payload = [
        {
          ...product,
          userId: userId,
          count: 1,
        },
      ];
    }

    const sendingCartData = {
      ...nonUserCartData,
      [userId]: payload,
    };

    localStorage.setItem("cart", JSON.stringify(sendingCartData));
  } else {
    payload = [
      {
        ...product,
        userId: userId,
        count: 1,
      },
    ];
    const sendingCartData = {
      [userId]: payload,
    };

    localStorage.setItem("cart", JSON.stringify(sendingCartData));
  }
  return true;
};

export const getCartItemsCount = () => {
  let storageUserData = JSON.parse(localStorage.getItem("userData"));
  let userId;
  if (storageUserData) {
    userId = storageUserData.id;
  }
  if (!storageUserData) {
    return 0;
  }

  const cart = localStorage.getItem("cart");
  if (cart) {
    let pcart = JSON.parse(cart);
    if (pcart[userId]) {
      return pcart[userId].length;
    }
  }
  return 0;
};

export const getCartItems = () => {
  let storageUserData = JSON.parse(localStorage.getItem("userData"));
  let userId;
  if (storageUserData) {
    userId = storageUserData.id;
  }
  const cart = localStorage.getItem("cart");
  if (cart) {
    let pcart = JSON.parse(cart);
    if (pcart[userId]) {
      return pcart[userId];
    }
  }
  return [];
};

export const increaseItemCount = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let storageUserData = JSON.parse(localStorage.getItem("userData"));
  const userId = storageUserData.id;

  let userCart = [];
  let nonUserCartData = {};

  for (let key in cart) {
    if (key == userId) {
      userCart = cart[key];
    } else {
      nonUserCartData[key] = cart[key];
    }
  }

  let userCartItem = userCart.find((item) => item.id == id);
  let notUserCartItem = userCart.filter((item) => item.id != id);

  userCartItem.count += 1;

  let userNewCartData = [...notUserCartItem, userCartItem];

  let sendingData = {
    ...nonUserCartData,
    [userId]: userNewCartData,
  };
  localStorage.setItem("cart", JSON.stringify(sendingData));
};

export const decreaseCount = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let storageUserData = JSON.parse(localStorage.getItem("userData"));
  const userId = storageUserData.id;

  let userCart = [];
  let nonUserCartData = {};

  for (let key in cart) {
    if (key == userId) {
      userCart = cart[key];
    } else {
      nonUserCartData[key] = cart[key];
    }
  }

  let userCartItem = userCart.find((item) => item.id == id);
  let notUserCartItem = userCart.filter((item) => item.id != id);

  let userNewCartData;

  if (userCartItem.count == 1) {
    userNewCartData = [...notUserCartItem];
  }

  if (userCartItem.count > 1) {
    userCartItem.count -= 1;
    userNewCartData = [...notUserCartItem, userCartItem];
  }

  let sendingData = {
    ...nonUserCartData,
    [userId]: userNewCartData,
  };
  localStorage.setItem("cart", JSON.stringify(sendingData));
};
