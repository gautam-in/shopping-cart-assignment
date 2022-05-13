import React, { useState, useEffect, useContext } from "react";
import { MainUrl } from "../Constant/index";
import { UserContext, CartContext, ProductDataContext } from "../../App";
import "./MasterProduct.css";

export default function MasterProduct(props) {
  const PageName = window.location.pathname.split("/");

  const [Data, setData] = useState([]);
  const [context, setContext] = useContext(UserContext);
  const [cartdata, setCartData] = useContext(CartContext);
  const [total, Settotal] = useContext(ProductDataContext);
  useEffect(() => {
    const url = MainUrl + "products";
    const Page = props.product.filter((item) => item.key === PageName[2]);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json.filter((item) => item.category.includes(Page[0].id)));
        setContext(Page[0].name);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [window.location.pathname]);
  const count = () => {
    Settotal(
      cartdata.reduce(function(prev, cur) {
        return prev + cur.quantity;
      }, 0)
    );
  };
  const addToCart = (item) => {
    if (cartdata.filter((cart) => cart.id === item.id).length > 0) {
      // if (cartdata.some((x) => x.id === item.id)) {
      let data = cartdata.filter((cart) => cart.id === item.id);
      console.log(data[0].quantity, "ajhkj;aowe");
      data[0].quantity += 1;

      setCartData([...cartdata]);
      console.log("hello check", cartdata);
    } else {
      item.quantity = 1;

      setCartData([...cartdata, item]);
      count();
      console.log("what", cartdata);
    }
    count();
    console.log("item data", item, cartdata);
  };
  return (
    <main className="FoodVeg">
      {Data &&
        Data.map((item, idx) => {
          return item.imageURL ? (
            <section className="Section">
              <h3>{item.name}</h3>
              <img src={require("../ServerImg" + item.imageURL)} />
              <p className="descripton">{item.description}</p>
              <p className="tags">
                <span className="tag-item">MRP Rs {item.price}</span>
                <span>
                  <button
                    onClick={() => addToCart(item)}
                    className="tag-item BuyButton"
                  >
                    Buy Now
                  </button>
                </span>
              </p>
            </section>
          ) : (
            ""
          );
        })}
    </main>
  );
}
