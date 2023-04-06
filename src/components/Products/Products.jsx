import React, { useEffect, useState } from 'react';
import { apiService } from 'src/utils/service';
import Accordion from 'react-bootstrap/Accordion';
import Categories from 'src/components/Categories/Categories';
import { useLocation } from 'react-router-dom';
import { useCategoryContext } from 'src/context/CategoryContext';
import './Products.scss';
import Footer from '../Footer/Footer';
import Item from '../Item/Item';
import { useItemContext } from 'src/context/ItemContext';

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const location = useLocation();
  const { selectedCategory, setSelectedCategory } = useItemContext();
  useEffect(() => {
    apiService('categories')
      .then((res) => {
        res = res
          .sort((a, b) => a.order - b.order)
          .filter((x) => x.order !== -1);
        setCategories(res);
        setSelectedCategory(res[0].id);
      })
      .catch((err) => console.error(err));

    apiService('products')
      .then((res) => {
        const arr = res.map((item) => ({ ...item, count: 1 }));
        setProducts(arr);
        setSelectedCategoryItems(arr);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let id;
    if (selectedCategory) {
      id = selectedCategory;
    } else if (!!location.state && 'category' in location.state) {
      id = location.state.category;
    }
    id && getItems(id);
  }, [products]);

  const getItems = (categoryId) => {
    setSelectedCategory(categoryId);
    const items = products.filter((product) => product.category === categoryId);
    setSelectedCategoryItems(items);
  };

  return (
    <>
      <Accordion className='accordion' defaultActiveKey='0'>
        <div>
          {categories.map((category, index) => (
            <div onClick={() => getItems(category.id)}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{category.name}</Accordion.Header>
                {selectedCategoryItems.map((item) => (
                  <Accordion.Body>
                    <Item item={item} />
                  </Accordion.Body>
                ))}
              </Accordion.Item>
            </div>
          ))}
        </div>
      </Accordion>

      <div className='product-container'>
        <div className='category-container'>
          {categories.map((category, index) => (
            <div
              onClick={() => getItems(category.id)}
              className={`category ${
                selectedCategory === category.id ? 'highlight' : 'regular'
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className='right-panel'>
          <div className='items'>
            {selectedCategoryItems.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
