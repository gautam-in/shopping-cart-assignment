import { useMemo } from "react";
const baseUrl = "http://localhost:5000/";

export const GET = async (getUrl) => {
  const url = `${baseUrl.concat(getUrl)}`;
  const data = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const POST = async (posturl, data) => {
  const url = `${baseUrl.concat(posturl)}`;
  const Data = JSON.stringify(data);
  const ResponseData = await fetch(url, {
    method: "POST",
    body: Data,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return ResponseData;
};

const addNewProduct = (product, cart, totalPrice = 0) => {
  let addedProduct = { ...product };
  addedProduct.quantity = 1;
  addedProduct.totalPrice = addedProduct.quantity * addedProduct.price;
  totalPrice += addedProduct.price;
  cart = [...cart, { ...addedProduct }];
  return { cart, totalPrice };
};

export const addToCart = (product, cart = [], totalPrice) => {
  if (cart.length > 0) {
    let existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
      totalPrice += existingItem.price;
      return { cart, totalPrice };
    } else {
      return addNewProduct(product, cart, totalPrice);
    }
  } else {
    return addNewProduct(product, cart, totalPrice);
  }
};

export const deleteFromCart = (product, deleteCart, newTotalPrice) => {
  product.quantity -= 1;
  product.totalPrice -= product.price;
  newTotalPrice -= product.price;
  if (product.quantity === 0) {
    deleteCart = deleteCart.filter((item) => item.id !== product.id);
  }
  return { deleteCart, newTotalPrice };
};
