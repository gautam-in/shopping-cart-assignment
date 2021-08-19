import React, { useEffect, useState } from "react";
import "./miniCart.scss";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const MiniCart = ({ cart, setCart, setCartOpen }) => {
  const [filteredData, setFilteredData] = useState([]);
  // Queries
  const { isLoading, isError, data } = useQuery("products", async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setFilteredData(data.filter(({ id }) => cart[id]));
    return data;
  });

  //Mutation
  const { mutate, isLoading: isMutationLoading } = useMutation(
    (id) => axios.post("http://localhost:5000/addToCart"),
    {
      onSuccess: (data, variables, context) => {
        // set cart state
        setCart((prev) => {
          if (prev[variables]) {
            prev[variables] += 1;
            return { ...prev };
          }
          return { ...prev, [variables]: 1 };
        });
      },
    }
  );

  const removeFromCart = (id) => {
    // set cart state
    setCart((prev) => {
      if (!prev[id]) {
        return { ...prev };
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  useEffect(() => {
    if (cart && data) setFilteredData(data.filter(({ id }) => cart[id]));
  }, [cart, data]);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something went wrong ...</p>;

  const noOfItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);

  console.log(filteredData);

  return (
    <div className="mini_cart">
      <header className="cart_header">
        <h4 className="my_cart">My Cart</h4>
        <p className="no_of_items">( {noOfItems} items )</p>
        <p className="cross" onClick={() => setCartOpen(false)}>
          &times;
        </p>
      </header>
      <article className="product_section">
        {noOfItems ? (
          <>
            <ul className="product_list">
              {filteredData.map(
                ({ name, price, id, imageURL, description }) => (
                  <li className="product_item" key={id}>
                    <img
                      src={imageURL}
                      alt={description}
                      className="cart_item_img"
                    />
                    <h5 className="cart_item_title">{name}</h5>
                    <div className="item_price_container">
                      <button
                        className="dec"
                        onClick={() => removeFromCart(id)}
                      >
                        -
                      </button>
                      <p className="quantity">{cart[id]}</p>
                      <button className="inc" onClick={() => mutate(id)}>
                        +
                      </button>
                      <p className="cart_cross">&times;</p>
                      <p className="price">Rs.{price}</p>
                      <p className="total">Rs.{price * cart[id]}</p>
                    </div>
                  </li>
                )
              )}
            </ul>
            <section className="lowest_price_section">
              <img
                src="/static/images/lowest-price.png"
                alt="lowest price guaranteed"
                className="low_price_img"
              />
              <p className="low_price_text">
                You won't find it cheaper anywhere
              </p>
            </section>
          </>
        ) : (
          <section className="empty_cart_section">
            <h4>No items in your cart</h4>
            <p>Your favourite items are just a click away</p>
          </section>
        )}
      </article>
      <footer className="cart_footer">
        <p className="promo_info">Promo code can be applied on payment page</p>
        <button className="checkout_btn" onClick={() => setCartOpen(false)}>
          {noOfItems ? (
            <>
              <p className="checkout_text">Proceed to checkout</p>
              <p className="checkout_total">
                Rs.
                {filteredData.reduce(
                  (acc, { id, price }) => acc + cart[id] * price,
                  0
                )}
              </p>
              <p className="checkout_arrow">&gt;</p>
            </>
          ) : (
            <p className="checkout_text">Start Shopping</p>
          )}
        </button>
      </footer>
    </div>
  );
};

export default MiniCart;
