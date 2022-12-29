import { useEffect, useState } from "react";
import { Category } from "../apis/category";
import { getProducts, Product } from "../apis/product";
import ProductCard from "../components/product-card";

type Props = {
  selectedCategories: Category[];
};

export const Products: React.FC<Props> = ({ selectedCategories }) => {
  const [Products, setProducts] = useState<{ [key: string]: Product[] }>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const data = await getProducts();
        data.reduce((acc, currProduct) => {
          acc[currProduct.category] = currProduct;
          return acc;
        }, {} as { [key: string]: Product });
        setProducts(
          data.reduce((acc, currProduct) => {
            if (acc[currProduct.category])
              acc[currProduct.category].push(currProduct);
            else acc[currProduct.category] = [currProduct];
            return acc;
          }, {} as { [key: string]: Product[] })
        );
        setFilteredProducts(data);
      } catch (error) {}
    };
    callAPI();
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(
        selectedCategories
          .map((category) => {
            return Products[category.id];
          })
          .reduce((acc, currProducts) => {
            return [...acc, ...(currProducts ?? [])];
          }, [])
      );
    } else
      setFilteredProducts(
        Object.values(Products).reduce((acc, currProducts) => {
          return [...acc, ...currProducts];
        }, [])
      );
  }, [selectedCategories, Products]);

  return (
    <ul
      style={{
        width: "80%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};
