export const getItem = (name) => {
  return localStorage.getItem(name);
};

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItem = (item) => {
  localStorage.removeItem(item);
};
