import React from 'react'
import { ProductBuyButton, ProductContent, ProductDescription, ProductHeadContent, ProductHeading, ProductImage, ProductListItemContainer, ProductPrice } from './ProductListItem.styled';
import { useDispatch } from 'react-redux';
import { handleAddToCart } from '../../store/cart/cartSlice';
import makeRequest from '../../services/api/index';
import appDefaults from '../../constants/index';

const ProductListItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleBuyProduct = async () => {
    try {
      const obj = {
        id: product.id,
        name: product.name,
        imageURL: product.imageURL,
        price: product.price,
        quantity: 1
      }
      const response = await makeRequest(appDefaults.api.addToCart, 'POST', {"id":product.id});
      if(response.data.response === "Success"){
        dispatch(handleAddToCart(obj));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductListItemContainer >
      <ProductHeading>{product.name}</ProductHeading>
      <ProductImage src={product.imageURL} alt={product.id} />
      <ProductContent>
        <ProductDescription>{product.description}</ProductDescription>
        {/* <ProductPrice>{product.price}</ProductPrice> */}
        <ProductBuyButton onClick={handleBuyProduct}>Buy Now @ Rs.{product.price}</ProductBuyButton>
      </ProductContent>
    </ProductListItemContainer>
  )
}

export default ProductListItem