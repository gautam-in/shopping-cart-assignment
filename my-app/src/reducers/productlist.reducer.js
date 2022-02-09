export function productlist(defStore = [], action) {
    switch (action.type) {
      case "UPDATE_PRODUCTS":
        return action.products;
      default:
        return defStore;
    }
  }
  