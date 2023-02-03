import { ProductCard } from "pages/Products/ProductCard";
import { useMarket } from "context";
import { useMemo } from "react";
import { useQuery } from "utils/fetchData";
import { Filters } from "./Filters";
import styles from "./product.module.scss";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const { data: products } = useQuery("/products");
  const { data: categories } = useQuery("/categories");
  const { isAuth, selectedCategory, cart, setCart } = useMarket();
  const navigate = useNavigate()

  const productsFilter = useMemo(() => {
    if (!selectedCategory) return products;
    else {
      return products.filter((item: Product) => {
        return item.category === selectedCategory;
      });
    }
  }, [products, selectedCategory]);

  const addToCart = (item: Product, _e: any) => {
    if (isAuth) {
      setCart((cart: Product[]) => [...cart, item]);
    } else {
      navigate("/register")
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_filters}>
        <Filters categories={categories} />
      </div>
      <div className={styles.container_products}>
        {productsFilter?.map((item: Product) => {
          return (
            <ProductCard
              product={item}
              key={item.id}
              onButtonClick={(e) => addToCart(item, e)}
              disable={cart.find(
                (cartitem: Product) => cartitem.id === item.id
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
