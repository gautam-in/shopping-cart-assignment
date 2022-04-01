import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { APIUrls } from '../../helpers/urls';
import { useDispatch } from 'react-redux';
import './Productlistingpage.scss';
import { addToCart } from '../../actions/cart';
import ProductCard from '../ProductCard/index.js';
function Productlistingpage(props) {
  let [searchParams] = useSearchParams();
  let catId = searchParams.get('cat_id');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = APIUrls.products();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        if (catId) {
          let filprod = data.filter((prod) => {
            return prod.category === catId;
          });
          setFilteredProducts(filprod);
        } else {
          setFilteredProducts(data);
        }
      });
  }, [catId]);

  useEffect(() => {
    const url = APIUrls.categories();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const addToNavCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div
      className="product-listing-container"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <aside className="product-category">
        <ul>
          {categories.length
            ? categories.map(
                (item) =>
                  item.enabled && (
                    <Link to={`/products?cat_id=${item.id}`}>
                      <li key={item.id}>{`Explore ${item.name}`}</li>
                    </Link>
                  )
              )
            : null}
        </ul>
      </aside>

      <section id="products-cards-wrapper" className="product-cards-wrapper">
        <ul
          className="product-list"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            padding: 0,
            margin: 0,
            listStyle: 'none',
          }}
        >
          {filteredProducts.length > 0
            ? filteredProducts.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))
            : null}
        </ul>
      </section>
    </div>
  );
}

export default Productlistingpage;
