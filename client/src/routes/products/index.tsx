import { useLoaderData } from "react-router-dom";

import { Flex } from "../../components/atoms";
import { type Product } from "../../components/molecules/product-card";
import { type Category } from "../../components/molecules/category-card";

import { ProductsGrid } from "../../components/templates/products-grid";
import { CategoryLinks } from "../../components/templates/categories-links";

export function Component() {
  const { products, categories } = useLoaderData() as {
    products: Product[];
    categories: Category[];
  };

  return (
    <Flex>
      <CategoryLinks categories={categories} />
      <ProductsGrid products={products} />
    </Flex>
  );
}

Component.displayName = "Products Page";
