import { ProductItem } from "models/products";
import { ApiClient } from "network/apiClient";
import { endPoints } from "repositories/endPoints";

class CartRepository {
  postItemToCart = async (product: ProductItem) => {
    let res = await ApiClient.post(endPoints.addToCart(), product);
    return res;
  };
}

const cartRepository = new CartRepository();
export { cartRepository as CartRepository };
