import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleCurrentProductCategory } from '../../store/products/productSlice';
import { ImageWrapper, CategoryImage, CategoryInfo, CategoryListItemWrapper, CategoryExploreButton } from './CategoryListItem.styles';

const CategoryListItem = ({ id, name, order, desc, imageUrl }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentProductCategory = useSelector(store => store.product.currentProductCategory);

  const handleCategoryClick = () => {
    currentProductCategory !== id && dispatch(handleCurrentProductCategory(id))
    navigate('/products');
  }
  return (
    <CategoryListItemWrapper order={order}>
    <CategoryInfo>
        <h2>{name}</h2>
        <p>{desc}</p>
        <CategoryExploreButton onClick={handleCategoryClick}>Explore {name}</CategoryExploreButton>
      </CategoryInfo>
      <ImageWrapper order={order}>
        <CategoryImage src={imageUrl} alt={desc} />
      </ImageWrapper>
    </CategoryListItemWrapper>
  )
}

export default CategoryListItem