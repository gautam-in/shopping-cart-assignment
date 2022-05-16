import { getCartItems } from "./localStorage";

export const parseRequestUrl = () => {
  const address = document.location.hash.slice(1).split("?")[0];
  const url = address.toLowerCase() || "/";
  const r = url.split("/");
  return { resource: r[1] };
};

export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};

export const redirectUser = () => {
  console.log(getCartItems().length);
  if (getCartItems().length !== 0) {
    document.location.hash = "/shipping";
  } else {
    document.location.hash = "/";
  }
};
