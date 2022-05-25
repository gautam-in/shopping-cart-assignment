import { fetchProducts } from './productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import {useWindowSize} from '../../utils/customHooks'
import CategoryList from '../../components/categoryList'
import MobileCategoryList from '../../components/mobileCategoryList'
import ProductCard from '../../components/productCard'
function Products(props) {
  const dispatch = useDispatch()
  const params = useParams();
  const size = useWindowSize();
  useEffect(() => {
    dispatch(fetchProducts(params?.categoryId))
  }, [params?.categoryId])
  return (
    <>
    <div className="fluid_container">
      <div className='productsList_container'>
            {size.width <= 768 ?  <MobileCategoryList/> : <CategoryList/>}
            <ProductCard/>
      </div>
    </div>
    </>
  );
}

export default Products;
