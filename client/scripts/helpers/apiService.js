import { API_PATH } from "../constants/constants";

export async function fetchData(url, method = "GET", postData = {}) {
  if (url === API_PATH.categoriesUrl) {
    const categoriesString = localStorage.getItem("categories");
    if (categoriesString && categoriesString.length) {
      const categoriesList = JSON.parse(categoriesString);
      if (categoriesList && categoriesList.length) {
        return Promise.resolve(categoriesList);
      }
    } else {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("categories", JSON.stringify(data));
          return Promise.resolve(data);
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        Promise.reject(error);
      }
    }
  } else {
    try {
      let response = null;
      if (method === "POST") {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
      } else {
        response = await fetch(url);
      }

      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data);
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      Promise.reject(error);
    }
  }
}
