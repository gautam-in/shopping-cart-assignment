import { ApiClient } from "network/apiClient";
import { endPoints } from "repositories/endPoints";

class ProductsRepository {
  getProducts = async () => {
    let response = await ApiClient.get(endPoints.products());
    return response;
  };
}

const productsRepository = new ProductsRepository();
export { productsRepository as ProductsRepository };
