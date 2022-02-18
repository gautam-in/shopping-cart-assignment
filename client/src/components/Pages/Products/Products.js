import React, { useEffect, useState } from 'react';
import './Products.css'
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from '../../../store/actions/categoryAction';
import { getProductsAction } from '../../../store/actions/productsAction';
import ProductItem from './ProductItem';
import { useNavigate, useParams } from 'react-router-dom';

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [filteteredProducts, setFilteredProducts] = useState([]);
  const categories = useSelector((state) => {
    return state.categories.categories;
  });

  const allProducts = useSelector((state) => {
    return state.products.allProducts;
  })

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategoriesAction());
    }
  }, [dispatch, categories]);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAction());
    }
    if (categoryId) {
      setFilteredProducts(
        allProducts.filter((product) => product.category === categoryId)
      );
    } else {
      setFilteredProducts(allProducts);
    }
  }, [dispatch, allProducts, categoryId]);

  const filterProduct = (id) => {
    if (id === categoryId) {
      navigate(`/products`);
      setFilteredProducts(allProducts);
    } else {
      navigate(`/products/${id}`);
      setFilteredProducts(
        allProducts.filter((product) => product.category === id)
      );
    }
  }

  const dropdownHandler = (event) => {
    const { value } = event.target;
    navigate(`/products/${value}`);
  };

  return <div className="productContainer">
    <div className="leftContainer">
      <ul className="categoryList">
        {categories.map((category) => (
          category.enabled ? <li key={category.key} className={`categoryTitle ${category.id === categoryId ? 'active' : ''}`} onClick={() => filterProduct(category.id)}>{category.name}</li> : null
        ))}
      </ul>
    </div>
    <div className="categoryDropdown">
      <select
        value={categoryId ? categoryId : "Default"}
        onChange={dropdownHandler}
        className="catgeoryDropdownList"
      >
        <option value='Default' disabled>
          Select Category
        </option>
        {categories
          .filter((category) => category.enabled)
          .map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
    <div className="rightContainer">
      {filteteredProducts ?
        filteteredProducts.map((product) => (
          <ProductItem productDetail={product} key={product.id} />
        )) : null
      }
    </div>
  </div>
}