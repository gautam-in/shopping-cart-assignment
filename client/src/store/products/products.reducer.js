export const PRODUCTS_INITIAL_STATE = {
  products: [],
  categories: [],
  currentCategory: '',
  isLoading: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
