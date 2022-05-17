import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import classes from '../styles/PLP.module.scss';

const ProductListingPage = (props) => {
  const { products, categories } = props;
  const [category, setCategory] = useState('all');
  const router = useRouter();
  const [filteredProducts, setfilteredProducts] = useState(null);

  const handleCategorySelect = (e) => {
    router.push(`/products?category=${e.target.value}`);
    setCategory(e.target.value);
  };

  const handleCategoryChange = (id) => {
    if (category === id) setCategory('all');
    else setCategory(id);
    router.push(`/products?category=${category === id ? 'all' : id}`);
  };

  useEffect(() => {
    let selectedCategory = 'all';
    const queryParams = router.asPath.split('?')[1];
    if (queryParams) {
      const urlParams = new URLSearchParams(`?${router.asPath.split('?')[1]}`);
      selectedCategory = urlParams.get('category');
    }
    setCategory(selectedCategory);
  }, []);

  useEffect(() => {
    if (category === 'all' || !category) setfilteredProducts(products);
    else setfilteredProducts(products.filter((p) => p.category === category));
  }, [category]);

  return (
    <div>
      <select
        className={classes.select}
        value={category}
        aria-label='select category'
        onChange={handleCategorySelect}
      >
        <option value='all'>All Products</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <section className={classes.categories}>
        {categories.map((c) => {
          return (
            <button
              key={c.id}
              value={c.id}
              className={category === c.id ? classes.selectedCategory : ''}
              onClick={() => handleCategoryChange(c.id)}
            >
              {c.name}
            </button>
          );
        })}
      </section>
      <section className={classes.productContainer}>
        {!!filteredProducts &&
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </section>
    </div>
  );
};

export default ProductListingPage;
