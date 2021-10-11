import { ApiClient } from "network/apiClient";
import { endPoints } from "repositories/endPoints";

class HomeRepository {
  getBanners = async () => {
    let response = await ApiClient.get(endPoints.banners());
    return response;
  };

  getCategories = async () => {
    let response = await ApiClient.get(endPoints.categories());
    return response;
  };
}

const homeRepository = new HomeRepository();
export { homeRepository as HomeRepository };
