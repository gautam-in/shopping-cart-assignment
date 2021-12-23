export const getTotal = (arr, key) => {
  return arr?.reduce(function (acc, obj) {
    return acc + obj[key];
  }, 0);
};
