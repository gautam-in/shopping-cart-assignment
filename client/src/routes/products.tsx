import { useLoaderData } from "react-router-dom";

export default function Products() {
  const products = useLoaderData();
  return <div>Products Route</div>;
}

export async function productsLoader() {
  try {
    const response = await fetch("http://localhost:8000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
