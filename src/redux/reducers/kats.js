import Categories from "../../server/categories/index.get.json";
const INITIAL_STATE = {
  Categories: Categories,
};

const katsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default katsReducer;
