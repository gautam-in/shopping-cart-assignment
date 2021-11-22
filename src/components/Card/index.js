import { useState, useEffect, Fragment } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {handleCartAction} from "../../shared/cartAction/index.js" 
import productData from "../../server/products/index.get.json";
import "./card.css";

const Card = ({ categoryID, cartItems, handleCartAction }) => {

  const [productList, setProductList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
      setProductList(productData);
      setDataList(productData);
  }, []);

  const handleClickButton = (product) => {
    //add product to cart and update the list
    //manage added product in cart
    let flag = false;
    const tempCartItemList = cartItems.map(obj => {
      if(obj.id === product.id) {
        flag = true
          return {...obj, quantity: obj.quantity + 1}
        } 
      else return obj
    })
    handleCartAction(flag ? tempCartItemList : [...tempCartItemList, {...product, quantity: 1}]);
    alert(`Your item ${product.name} Added to cart`)
  };

  const filterProductData = (id) => {
    if (id) {
      return dataList.filter((item) => item.category === id);
    } else {
      return dataList;
    }
  };

  useEffect(() => {
    if (categoryID && categoryID !== "") {
      const data = filterProductData(categoryID);
      setProductList(data);
    } else {
      setProductList(dataList);
    }
    // eslint-disable-next-line
  }, [categoryID]);

  return (
    <Fragment>
      <section className="card-row">
        {productList && ((productList.length > 0 && categoryID !== "") || 
          (productList.length === 0 && categoryID === "")) ? (
          <>
            {(productList.length > 0 ? productList : productData).map((product) => (
              <div className="card-outer" key={product.id}>
                <div className="card">
                  <h2>{product.name}</h2>
                  <div className="card-mobile">
                    <figure>
                      <img src={product.imageURL} alt={product.name} />
                    </figure>
                    <div className="card-data-mobile">
                      <div className="card-data">{product.description}</div>
                      <div className="card-footer">
                        <div
                          tabIndex="0"
                          role="button"
                          aria-pressed={isPressed}
                          onClick={() => handleClickButton(product)}
                          onKeyDown={(e) => {
                            if (e.key !== "Enter" && e.key !== " ") {
                              return;
                            }
                            setPressed(true);
                          }}
                          onKeyUp={(e) => {
                            if (e.key !== "Enter" && e.key !== " ") {
                              return;
                            }
                            setPressed(false);
                          }}
                          onMouseDown={() => {
                            setPressed(true);
                          }}
                          onMouseUp={() => {
                            setPressed(false);
                          }}
                          className="buynow"
                          style={{ cursor: "pointer" }}
                        >
                          Buy Now
                          <span className="hide-lg">@</span>
                        </div>
                        <span>
                          MRP RS.
                          {parseInt(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>No Data</h1>
        )}
      </section>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    cartItems: state.CartReducer.itemList ? state.CartReducer.itemList : []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleCartAction
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
