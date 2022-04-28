import React, { useState, useEffect, useContext } from "react";
import { ImgUrl, MainUrl } from "../Constant/index";
import { UserContext, CartContext } from "../../App";
import "../FVPage/FVPage.css";

export default function BCDPage() {
  const [Data, setData] = useState([]);
  const [context, setContext] = useContext(UserContext);
  const [cartdata, setCartData] = useContext(CartContext);
  useEffect(() => {
    const url = MainUrl + "products";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(
          json.filter((item) =>
            item.category.includes("5b6899123d1a866534f516de")
          )
        );
        setContext("Bakery Cakes and Dairy");
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const addToCart = (item) => {
    item.quantity = 1;
    setCartData((cartdata) => [...cartdata, item]);
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
