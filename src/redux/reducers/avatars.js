import Product from "../../server/products/index.get.json";

const INITIAL_STATE = {
  sections: [
    {
      items: Product,
    },
  ],
};

const avatarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default avatarsReducer;
