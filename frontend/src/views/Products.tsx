import { useEffect, useState } from "react";
import { Category } from "../apis/category";
import { getProducts, Product } from "../apis/product";
import { ProductCard } from "../components/product-card";
import { Banners } from "../layout/banners";
import { Header } from "../layout/header";
import { Sidebar } from "../layout/sidebar";
import "./products.scss";

type Props = {};

export const Products: React.FC<Props> = () => {
  const [products, setProducts] = useState<{ [key: string]: Product[] }>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

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
            return products[category.id];
          })
          .reduce((acc, currProducts) => {
            return [...acc, ...(currProducts ?? [])];
          }, [])
      );
    } else
      setFilteredProducts(
        Object.values(products).reduce((acc, currProducts) => {
          return [...acc, ...currProducts];
        }, [])
      );
  }, [selectedCategories, products]);

  const checkboxClickHandler = (
    _: React.ChangeEvent<HTMLInputElement>,
    category: Category
  ) => {
    if (_.target.checked) {
      setSelectedCategories((categories) => [...categories, category]);
    } else {
      const newSelectedCategories = [...selectedCategories].filter(
        (currCategory) => currCategory.id !== category.id
      );
      setSelectedCategories(newSelectedCategories);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          width: "90%",
          margin: "auto",
          paddingTop: "100px",
        }}
      >
        <main>
          <Banners />
          <div className="container">
            <Sidebar checkboxClickHandler={checkboxClickHandler} />
            <ul
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "30px",
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
