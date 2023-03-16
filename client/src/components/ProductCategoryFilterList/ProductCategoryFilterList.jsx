import React from 'react'
import { CategoryItem, ProductCategoryFilterListContainer } from './ProductCategoryFilterList.styled'
import { useDispatch, useSelector } from 'react-redux';
import { handleCurrentProductCategory } from '../../store/productSlice';

const ProductCategoryFilterList = ({categories}) => {
    const dispatch = useDispatch();
    const currentProductCategory = useSelector(store => store.product.currentProductCategory);

    const handleCategoryFilter = (id) => {dispatch(handleCurrentProductCategory(id))
      }

  return (
    <ProductCategoryFilterListContainer>
    {
      categories?.map(item=> <li key={item.id}>
        <CategoryItem key={item.id} activeFilter={currentProductCategory === item.id} onClick={()=>handleCategoryFilter(item.id)}>{item.name}</CategoryItem>
    </li>)
    }
    </ProductCategoryFilterListContainer>
  )
}

export default ProductCategoryFilterList