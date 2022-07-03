import { ApiClient } from "network/apiClient";
import { endPoints } from "repositories/endPoints";

class HomeRepository {
  getBanners = async () => {
    let res = await ApiClient.get(endPoints.banners());
    return res;
  };

  getCategories = async () => {
    let res = await ApiClient.get(endPoints.categories());
    return res;
  };
}

const homeRepository = new HomeRepository();
export { homeRepository as HomeRepository };

