import { type Category } from "../../components/molecules/category-card";
import { type Banner } from "../../components/templates/carousel";

export async function loadCategories() {
  try {
    const fetchCategories = await fetch("http://localhost:8000/api/categories");
    const fetchBanners = await fetch("http://localhost:8000/api/banners");

    const [categoriesResponse, bannersResponse] = await Promise.all([
      fetchCategories,
      fetchBanners,
    ]);

    if (!categoriesResponse.ok || !bannersResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [{ data: categoriesData }, { data: bannersData }] = await Promise.all(
      [
        categoriesResponse.json() as Promise<{ data: Category[] }>,
        bannersResponse.json() as Promise<{ data: Banner[] }>,
      ]
    );

    return {
      categories: categoriesData.sort((a, b) => a.order - b.order),
      banners: bannersData,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
