import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LOGIN_ROUTE } from '../../routes/constants';
import { isEmpty } from 'lodash';
import { AddCart } from '../Cart/Cart.action';
import { useDispatch } from 'react-redux';
import { db } from '../../config/firebase';
const ProductList = ({productsList}) => {
const history = useHistory();
const dispatch = useDispatch();
let totalQuantity = 0;
let cartDetailData = [];

const user = useSelector(
    (state) =>
        state.app &&
        state.app.userData
    );   
  const addProducts = (id, product) => {
    if (!isEmpty(user)) {
        let isItemExist = false;
        db?.collection('sabkabazaar')?.doc(user.email).get().then(snapshot => {
            if (!isEmpty(snapshot.data())) {
                cartDetailData = [];
                totalQuantity = snapshot.data().cartProduct.totalQuantity;
                snapshot.data().cartProduct.cartDetail.map((item, key) => {
                  let tempData = item;
                  if (item.id === id) {
                    tempData.quantity = tempData.quantity + 1;
                    isItemExist = true;
                  }
                  cartDetailData.push(tempData);
                })
            }

            if (!isItemExist) {
                cartDetailData.push({
                    id:product.id,
                    quantity:1,
                    name:product.name,
                    image:product.imageURL,
                    price:product.price
                })
                db.collection('sabkabazaar').doc(user.email).set({
                    cartProduct: {
                        cartDetail: cartDetailData,
                        totalQuantity: snapshot.data() ? snapshot.data().cartProduct.totalQuantity + 1 : 1
                    }
                })
                .then(() => {
                    dispatch(AddCart({
                        cartDetail: cartDetailData,
                        totalQuantity: snapshot.data() ? snapshot.data().cartProduct.totalQuantity + 1 : 1
                    }));
                });
            } else {
                db.collection('sabkabazaar').doc(user.email).set({
                    cartProduct: {
                        cartDetail: cartDetailData,
                        totalQuantity: isEmpty(snapshot.data()) ? 1 : totalQuantity
                    }
                })
                .then(() => {
                    dispatch(AddCart({
                        cartDetail: cartDetailData,
                        totalQuantity: isEmpty(snapshot.data()) ? 1 : totalQuantity
                    }));
                });
            }
        })
        
    } else {
      history.push(LOGIN_ROUTE);
    }
  }
  return (
    <>
    {
        productsList.map((product) => {
        return (   
            <div className="product-card" key={product.id}>
            <div className="product-title">{product.name}</div>
                <div className="product-details">
                <img
                    className="product-image"
                    src={product.imageURL}
                    alt={product.name}
                    height="120"
                    width="100"
                />
                <div className="product-description">
                {product.description}
                </div>
            </div>
            <div className="price-details">
                <div className="mrp">MRP Rs {product.price}</div>
                    <button
                        type="button"
                        className="buy-button"
                        onClick={(e) => addProducts(product.id, product)}
                        tabIndex={0}
                        onKeyPress={(e) => addProducts(product.id, product)}
                    >
                    Buy Now <span className="buy-now-price"> @ Rs.{product.price}</span>
                    </button>
                </div>
            </div>
        )})
    }
    </>
  )
}

export default ProductList