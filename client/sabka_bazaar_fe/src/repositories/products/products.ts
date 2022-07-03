import { ApiClient } from "network/apiClient";
import { endPoints } from "repositories/endPoints";

class ProductsRepository {
  getProducts = async () => {
    let res = await ApiClient.get(endPoints.products());
    return res;
  };
}

const productsRepository = new ProductsRepository();
export { productsRepository as ProductsRepository };
