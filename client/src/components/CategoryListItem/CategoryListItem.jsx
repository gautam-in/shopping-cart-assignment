import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleCurrentProductCategory } from '../../store/productSlice';
import { ImageWrapper, CategoryImage, CategoryInfo, CategoryListItemWrapper, CategoryExploreButton } from './CategoryListItem.styled';

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
      <ImageWrapper order={order}>
        <CategoryImage src={imageUrl} alt={desc} />
      </ImageWrapper>
      <CategoryInfo>
        <h2>{name}</h2>
        <p>{desc}</p>
        <CategoryExploreButton onClick={handleCategoryClick}>Explore {name}</CategoryExploreButton>
      </CategoryInfo>
    </CategoryListItemWrapper>
  )
}

export default CategoryListItem