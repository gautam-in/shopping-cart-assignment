import Axios from "axios";

export interface Category {
  description: string;
  enabled: boolean;
  id: string;
  imageUrl: string;
  key: string;
  name: string;
  order: number;
}

export const getCategories = (): Promise<Category[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Axios.get<Category[]>("/categories");
      resolve(response.data as Category[]);
    } catch (error) {
      console.log(error);
      reject("Failed to fetch categories");
    }
  });
};
