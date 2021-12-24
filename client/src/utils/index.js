export const getTotal = (arr, key) => {
  return arr?.reduce((acc, obj) => {
    return acc + obj[key];
  }, 0);
};
