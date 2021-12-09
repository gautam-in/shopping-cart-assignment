import { API_PATH } from "../constants/constants";

export async function fetchData(url) {
  if (url === API_PATH.categoriesUrl) {
    const categoriesString = localStorage.getItem("categories");
    if (categoriesString && categoriesString.length) {
      const categoriesList = JSON.parse(categoriesString);
      if (categoriesList && categoriesList.length) {
        return Promise.resolve(categoriesList);
      }
    } else {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem("categories", JSON.stringify(data));
      return Promise.resolve(data);
    }
  } else {
    const response = await fetch(url);
    const data = await response.json();
    return Promise.resolve(data);
  }
}
