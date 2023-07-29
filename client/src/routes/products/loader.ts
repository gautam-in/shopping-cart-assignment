export async function loadProducts({ params }) {
  try {
    const productsResponse = fetch("http://localhost:8000/api/products");
    const categroiesResponse = fetch("http://localhost:8000/api/categories");

    const [products, categories] = await Promise.all([
      productsResponse,
      categroiesResponse,
    ]);

    if (!products.ok || !categories.ok) {
      throw new Error("Failed to fetch data");
    }

    const [{ data: productsData }, { data: categoriesData }] =
      await Promise.all([products.json(), categories.json()]);

    let productsList = [];
    if (params.category) {
      const categoryId = categoriesData.find(
        ({ key }) => key === params.category
      ).id;
      productsList = productsData.filter(
        ({ category }) => category === categoryId
      );
    } else {
      productsList = productsData;
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
