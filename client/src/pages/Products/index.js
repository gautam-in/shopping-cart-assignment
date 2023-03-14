import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components';
import { useShopContext } from '../../store';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { Filters } from '../../components/Filters';
import styles from './products.module.scss';

export const Products = () => {
  const { data: products } = useFetchAPI('/products');
  const { data: categories } = useFetchAPI('/categories');
  const { isAuth, selectedCategory, cart, setCart } = useShopContext();
  const navigate = useNavigate();

  /* Filtering the products based on the selected category. */
  const productsFilter = useMemo(() => {
    if (!selectedCategory) return products;
    else {
      return products.filter((item) => {
        return item.category === selectedCategory;
      });
    }
  }, [products, selectedCategory]);

  /**
   * If the user is authenticated, add the item to the cart. If the user is not authenticated, navigate
   * to the register page
   * @param item - The item that was clicked on.
   */
  const addToCart = (item) => {
    if (isAuth) {
      setCart((cart) => [...cart, { ...item, count: 1 }]);
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_filters}>
        <Filters categories={categories} />
      </div>
      <div className={styles.container_products}>
        {productsFilter?.map((item) => {
          return (
            <ProductCard
              product={item}
              key={item.id}
              onButtonClick={() => addToCart(item)}
              disable={cart.find((cartitem) => cartitem.id === item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
