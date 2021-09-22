import React, { useState, useEffect } from "react";
import "./ListingCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { addCartDetails } from "../../redux/cart/cartAction";
import CartButton from "../CartButton/CartButton";

function ListingCard({ data }) {
  const selectedCategory = useSelector((state) => state.category.categoryId);
  const cartItem = useSelector((state) => state.cart.item);
  const cartCount = useSelector((state) => state.cart.count);
  const [cardData, setCardData] = useState(data ? data : "");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory && data) {
      let filteredData = data.filter((el) => el.category === selectedCategory);
      setCardData(filteredData);
    } else {
      setCardData(data ? data : "");
    }
  }, [selectedCategory]);

  const addItemHandler = (val) => {
    let item = {
      id: val.id,
      name: val.name,
      quantity: 1,
      price: val.price,
      stock: val.stock,
      image: val.imageURL,
    };
    dispatch(addCartDetails(item));
  };

  const itemCount = (id) => {
    let item = cartItem && cartItem.find((el) => el.id === id);
    return item && item.quantity;
  };
  return (
    <>
      {cardData && cardData.length ? (
        <div className="listing-product">
          {cardData.map((el) => (
            <div key={el.id} className="listing-product-element">
              <div className="listing-product-element-title">{el.name}</div>
              <div className="listing-product-element-content">
                <img
                  src={el.imageURL}
                  alt={el.name}
                  className="listing-product-element-image"
                  height="120"
                  width="100"
                />
                <div className="listing-product-element-desc">
                  {el.description}
                </div>
              </div>
              <div className="listing-product-element-footer">
                {itemCount(el.id) ? (
                  <>
                    <CartButton
                      id={el.id}
                      price={el.price}
                      quan={itemCount(el.id)}
                    />
                  </>
                ) : (
                  <>
                    <div className="price-lg">MRP Rs.{el.price}</div>
                    <button
                      className="listing-product-element-button button-lg"
                      onClick={() => addItemHandler(el)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="listing-product-element-button button-sm"
                      onClick={() => addItemHandler(el)}
                    >
                      Buy Now @ Rs.{el.price}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data-product">
          <h1>No Data Found</h1>
        </div>
      )}
    </>
  );
}

export default React.memo(ListingCard);
