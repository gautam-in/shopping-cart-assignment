import React, { useState, useEffect } from 'react'
import { ProductListWrapper } from './ProductList.style';
import Sidebar from './Sidebar/Sidebar';
import Cart from '../Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductList} from './ProductListAction';
import { addProductToCart, showCartModel } from '../Cart/CartAction';
import { config } from "../../config";
import { Button } from 'antd';
import { useWindowWidth } from '../../CustomHooks/useWindowWidth';

const ProductList = () => {

  const dispatch = useDispatch();
  const {windowWidth} = useWindowWidth();
  const { categories_data } = useSelector(state => state.HOMEREDUCER);
  const {product_list, selectedCategoryData} = useSelector(state => state.PRODUCTREDUCER);
  const { cart_open_model } = useSelector(state => state.CARTREDUCER);

  useEffect(()=>{
    dispatch(fetchProductList());
  },[dispatch])


  useEffect(() => {
    //scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  },[]);

  const imageUrlFormatter = (url) => {
    return `${config.base_url}${url}`;
  }

  const descriptionFormatter = (description) => {
    return description.substring(0, 100);
  }

  const openCartModel = (product) => {
    dispatch(showCartModel(true));
    if(product){
      dispatch(addProductToCart(product));
    }
  }

  const closeCartModel = () => {
    dispatch(showCartModel(false));
  }

  return (
    <ProductListWrapper>
      <div className='product_container'>
        <Sidebar 
          categories_data={categories_data}
        />
        <div className='product_list'>
          {!selectedCategoryData.length ? <div>No Products</div> : ""}
          {selectedCategoryData && selectedCategoryData.length > 0 && selectedCategoryData.map((product, index) => {
            if( window.innerWidth > 768) {
              return (
                  <div className='product_list_item'>
                    <h3><strong>{product.name}</strong></h3>
                    <img 
                      style={{margin:"10px"}}
                      src={imageUrlFormatter(product.imageURL)}
                    />
                    <p>{descriptionFormatter(product.description)}</p>
                  <div className='price_tag'>
                    <div>MRP Rs {product.price}</div>
                    <Button 
                      size='large'
                      onClick={()=>openCartModel(product)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              )
            } else if( window.innerWidth < 768) {
              return (          
                <div className='product_list_item_mobile'>
                    <h3><strong>{product.name}</strong></h3>
                    <div className='product_img_desc_container_mobile'>
                      <img 
                        style={{margin:"10px"}}
                        src={imageUrlFormatter(product.imageURL)}
                      />
                      <div className='product_desc_price_mobile'>
                        <p>{descriptionFormatter(product.description)}</p>
                        <Button 
                          size='large'
                          onClick={(e)=>openCartModel(product)}
                        >
                          Buy Now @Rs {product.price}
                        </Button>
                      </div>
                    </div>
                </div>
              )
            }
          })}
          
        </div>
      </div>
      <Cart 
        openModal={cart_open_model}
        openCartModel={openCartModel}
        closeCartModel={closeCartModel}
      />
    </ProductListWrapper>
  )
}

export default ProductList
