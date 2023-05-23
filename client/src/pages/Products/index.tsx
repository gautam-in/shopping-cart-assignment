import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/fetchCategories";

import { fetchProducts } from "../../services/fetchProducts";
import Section from "../../components/Section";
import ProductCard from "../../components/ProductCard";
import { CategoryType, ProductType } from "../../types";

import "./styles.scss";
import ListDropdown from "../../components/Common/ListDropdown";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState("");

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: products = [], isLoading: isProductLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    setFilter(urlSearchParams.get("category") || "");
  }, [location.search]);

  const handleCategoryFilter = (id: string) => {
    setFilter(id);
    navigate(`?category=${id}`);
  };

  if (isProductLoading && isCategoriesLoading) {
    return null;
  }

  return (
    <Section className="no-padding">
      <h1 className="sr-only">Products</h1>
      <div className="product-page">
        <aside className="product-page__aside">
          <div className="hidden@tablet hidden@desktop">
            <ListDropdown
              options={categories.map((c: CategoryType) => ({
                label: c.name,
                value: c.id,
              }))}
              onSelect={(option) => handleCategoryFilter(option.value)}
            />
          </div>
          <ul className="product-page__categories hidden@mobile">
            {categories.map((category: CategoryType) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryFilter(category.id)}
                  className={category.id === filter ? "active" : ""}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="product-page__wrapper">
          {products
            .filter((p: ProductType) => (filter ? p.category == filter : true))
            .map((product: ProductType) => (
              <ProductCard
                name={product.name}
                description={product.description}
                imageUrl={product.imageURL}
                key={product.id}
                id={product.id}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Products;
