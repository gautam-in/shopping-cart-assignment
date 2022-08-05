import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScreenWidth } from '../redux/Action_creators/ScreenActions'
import MobileSidebar from './MobileSidebar'
import MobiletabProductList from './Mobile_tab_ProductList'
import ProductsList from './ProductsList'
import Sidebar from './Sidebar'
import { getProductCategories } from '../redux/Action_creators/ProductCategorys'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts, getFilterByCategory, removeStoredProducts } from '../redux/Action_creators/ProductsActions';
import Footer from './Footer'

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  const Products = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();
  const [width, setWidth] = useState(getWidth());
  const getProducts=()=>{
    // if(searchParams.has('filter')){
    //  dispatch(getFilterByCategory(searchParams.get('filter')))
    // }
    // else{
      dispatch(getAllProducts());
    // }
  }

  useEffect(() => {
    // dispatch(getProductCategories())
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  useEffect(()=>{
    getProducts();
    return ()=>{
      dispatch(removeStoredProducts())
    }
  },[searchParams])

  return (
    <>
    <div className='react-container content'>
      {/* {
        width <= 500 ? <MobileSidebar /> : <Sidebar />
      } */}
      <div className='sidebar-content'>
        {
          width <= 1240 ? <MobiletabProductList /> : <ProductsList />
        }
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default Products