import React, { useState, useEffect, useContext } from "react";
import { ImgUrl, MainUrl } from "../Constant/index";
import { UserContext, CartContext, ProductDataContext } from "../../App";
import "../FVPage/FVPage.css";

export default function BCPage() {
  const [Data, setData] = useState([]);
  const [context, setContext] = useContext(UserContext);
  const [cartdata, setCartData] = useContext(CartContext);
  const [total, Settotal] = useContext(ProductDataContext);
  useEffect(() => {
    const url = MainUrl + "products";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(
          json.filter((item) =>
            item.category.includes("5b6899683d1a866534f516e0")
          )
        );
        setContext("Baby Care");
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const count = () => {
    Settotal(
      cartdata.reduce(function(prev, cur) {
        return prev + cur.quantity;
      }, 0)
    );
  };
  const addToCart = (item) => {
    if (cartdata.includes(item)) {
      item.quantity += 1;

      setCartData([...cartdata]);
    } else {
      item.quantity = 1;

      setCartData([...cartdata, item]);
      count();
    }
    count();
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
