import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import Sidebar from '../components/products/Sidebar';
import useQuery from '../hooks/useQuery';
import { Product } from '../utils/types/product';

function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(location.state);
  const { data: products } = useQuery('/products');

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;

    return products.filter((item: Product) => item.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section className="products">
      <Sidebar
        selectedCategory={selectedCategory}
        selectCategory={(category: string) => setSelectedCategory(category)}
      />
      <ProductList products={filteredProducts} />
    </section>
  );
}

export default Products;
