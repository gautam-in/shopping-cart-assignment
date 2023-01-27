export const addItemToLocalstorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalstorage = (key) => {
  const res = localStorage.getItem(key);
  if (res != null) {
    return res;
  } else return null;
};

export const removeItemFromLocalstorage = (key) => {
  localStorage.removeItem(key);
};
