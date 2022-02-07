import React, {useContext } from "react";

import {
  FlexColumnItems,
  FlexItems,
  ProductCard,
  ProductDescription,
  ProductDescriptionContainer,
  ProductImage,
} from "./ProductsElements";
import { HeadingSecondary } from "../../Components/Typography/Typography";
import { Button } from "../../Components/Button/ButtonElements";
import { CartContext } from "../../Components/Context/CartContext";


const ProductFinalCard = (props) =>{
    const {
      state: { products: productsData, cart },
      dispatch,
    } = useContext(CartContext);
  
    const {item} = props;
    const addToCart = async (item) => {
      try {
        dispatch({ type: "ADD_TO_CART", payload: item });
      } catch (error) {
        dispatch({ type: "FAILED", payload: true });
        console.log(error);
      }
    };
    return(
        <ProductCard key={item.id}>
          <HeadingSecondary>{item.name}</HeadingSecondary>
            <FlexItems>
              <ProductImage src={item.imageURL} />
                <ProductDescriptionContainer>
                  <ProductDescription>
                    {item.description}
                  </ProductDescription>
                    <FlexColumnItems>
                      <HeadingSecondary fontSize="1.6rem">{`MRP Rs.${item.price}`}</HeadingSecondary>
                        {cart.some((c) => c.id === item.id) ? (
                            <Button
                              customPadding=".8rem"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item,
                                })
                              }
                            >
                              Remove
                            </Button>
                            ) : (
                              <Button
                                customPadding=".8rem"
                                disabled={item.stock <= 0}
                                onClick={() => addToCart(item)}
                              >
                                {item.stock <= 0 ? "Sold Out" : "Buy Now"}
                              </Button>
                          )}
                    </FlexColumnItems>
                </ProductDescriptionContainer>
             </FlexItems>
          </ProductCard>
      )
  }

export default ProductFinalCard;