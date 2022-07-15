import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import CategoryDropDown from '../../components/CategoryDropDown/CategoryDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { listCategoryDetails } from '../../redux/category/category.actions';
import { setCategory } from '../../redux/cart/cart.actions';
import ProductList from '../../components/ProductList/ProductList';

import './ProductsPage.scss';

const ProductsPage = () => {

  const [catData, setCatData] = useState([])


  const { categoryId } = useSelector(store => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    getCategory()

  }, [])

  const getCategory = async () => {

    const { status, data } = await dispatch(listCategoryDetails());
    if (status) {
      setCatData([...data])
      if (data.length) {
        if (!categoryId) {
          dispatch(setCategory(data[0]._id))
        }
      }
    }
  }

  return (
    <main className='product-page'>
      <Sidebar catData={catData} />
      <CategoryDropDown catData={catData} />
      <ProductList />
    </main>
  )
};

export default ProductsPage;
