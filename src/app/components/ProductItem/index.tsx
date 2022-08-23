/**
 *
 * ProductItem
 *
 */
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItemStyle } from 'styles/product-item-styles';
import { slice } from 'app/components/MyCart/slice';
import { selectMyCart } from 'app/components/MyCart/selectors';

interface Props {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  price: number;
}

export const ProductItem = memo((props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectMyCart);

  const { id, name, imageURL, description, price } = props;

  const addToCart =  useCallback( (data) => {
    const { actions } = slice;
    dispatch(
      actions.addItem({
        cart,
        newItem: data,
      }),
    );
  }, [dispatch]);

  return (
    <article className="product-item" key={id}>
      <div className="product-item-title">{name}</div>
      <div className="product-info">
        <div className="product-img">
          <img src={imageURL} alt="imagename" />
        </div>
        <div className="product-desc">{description}</div>
      </div>
      <div className="product-purchase">
        <div className="product-mrp">MRP Rs.{price}</div>
        <button
          className="product-btn-buynow"
          aria-label="Buy Now"
          onClick={() => addToCart(props)}
        >
          Buy Now
        </button>
        <button
          className="product-btn-small-screen"
          aria-label="Buy Now"
          onClick={() => addToCart(props)}
        >
          Buy Now @ Rs.{price}
        </button>
      </div>
      <ProductItemStyle />
    </article>
  );
});
