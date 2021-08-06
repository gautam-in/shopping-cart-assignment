export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const checkOnlyLetters = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

export const vaildatePassword = (password) => {
  let regix = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regix.test(password);
};

export const filterProudcts = (category, productList) => {
  const { id } = category;
  if (id === "all") return productList;
  const newList = [];
  productList.forEach((product) => {
    if (product.category === id) newList.push(product);
  });

  return newList;
};
