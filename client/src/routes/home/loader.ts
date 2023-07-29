import { type Category } from "../../components/molecules/category-card";

export async function loadCategories() {
  try {
    const response = await fetch("http://localhost:8000/api/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const { data } = (await response.json()) as { data: Category[] };
    return data.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
