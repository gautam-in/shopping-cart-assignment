import { type Category } from "../../components/molecules/category-card";
import { type Product } from "../../components/molecules/product-card";

export async function loadProducts({
  params,
}: {
  params: { category?: string };
}) {
  try {
    const fetchProducts = fetch("http://localhost:8000/api/products");
    const fetchCategories = fetch("http://localhost:8000/api/categories");

    const [productsResponse, categoriesResponse] = await Promise.all([
      fetchProducts,
      fetchCategories,
    ]);

    if (!productsResponse.ok || !categoriesResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [{ data: productsData }, { data: categoriesData }] =
      await Promise.all([
        productsResponse.json() as Promise<{ data: Product[] }>,
        categoriesResponse.json() as Promise<{ data: Category[] }>,
      ]);

    let productsList: Product[] = productsData;

    if (params.category) {
      const categoryId = categoriesData.find(
        ({ key }) => key === params.category
      )?.id;

      productsList = productsData.filter(
        ({ category }) => category === categoryId
      );
    }

    return {
      products: productsList,
      categories: categoriesData.sort((a, b) => a.order - b.order),
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
