import React, { useContext, useEffect, useState } from "react";
import { Context as CartContext } from "../../context/CartContext";
import FontAwesome from "react-fontawesome";
import ReadMoreComponent from "./ReadMoreComponent"
function ProductCard({ productInfo }) {
  const { name, imageURL, description, price, id, stock } = productInfo;
  const { addItem, incrementItem, decreaseItem, state } =
    useContext(CartContext);
  const [present, setPresent] = useState(false);
  const [index, setIndex] = useState(null);
  const plusFontClickHandler = () => {
    if (state.items[index].quantity === stock)
      alert(`We have only ${stock} ${name} items in stock`)
    else
      incrementItem(productInfo)
  }
  useEffect(() => {
    let flag = false
    state.items.forEach((item, i) => {
      if (item.id === id) {
        setPresent(true);
        setIndex(i);
        flag = true;
      }
    });
    if (flag === false)
      setPresent(false)
  }, [state, id]);
  return (
    <div className="product-card-container">
      <div className="product-card-header">
        <h3>{name} </h3>
      </div>
      <div className="desktop">
        <img style={{ width: "80%" }} src={imageURL} alt={name} />
        <ReadMoreComponent>
          {description}
        </ReadMoreComponent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <p style={{ fontWeight: "bolder", width: "100%", fontSize: "1.2rem" }}>MRP {price} </p>
          {present === true ? (
            <div style={{ display: "flex", alignItems: "center", alignSelf: "flex-end" }}>
              <FontAwesome
                onClick={() => decreaseItem(productInfo)}
                name="minus"
                size="2x"
                style={{
                  color: "white",
                  backgroundColor: "#d00155",
                  cursor: "pointer",
                  padding: "8px",
                }}
              />
              <p style={{ margin: "0px 10px", fontWeight: "bolder", fontSize: "1.3rem" }}>
                {state.items[index] && state.items[index].quantity}
              </p>
              <FontAwesome
                name="plus"
                size="2x"
                onClick={plusFontClickHandler}
                style={{
                  color: "white",
                  backgroundColor: "#d00155",
                  cursor: "pointer",
                  padding: "8px",
                }}
              />
            </div>
          ) : (
            <button
              style={{ width: "inherit", cursor: "pointer" }}
              className="button"
              onClick={() => addItem(productInfo)}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
      <div className="tablet">
        <div style={{ display: "flex", flexDirection: "row", marginBottom: "1rem" }}>
          <div style={{ width: "100%" }}>
            <img style={{ width: "100%" }} src={imageURL} alt={name} />
          </div>
          <div style={{
            backgroundColor: "#eaeaea",
            fontWeight: "bold",
            width: "70%"
          }}>
            <ReadMoreComponent>
              {description}
            </ReadMoreComponent>

          </div>
        </div>
        {present === true ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <FontAwesome
              onClick={() => decreaseItem(productInfo)}
              name="minus"
              size="2x"
              style={{
                color: "white",
                backgroundColor: "#d00155",
                cursor: "pointer",
                padding: "8px",
              }}
            />
            <p style={{ margin: "0px 10px", fontWeight: "bolder", fontSize: "1.3rem" }}>
              {state.items[index] && state.items[index].quantity}
            </p>
            <FontAwesome
              name="plus"
              size="2x"
              onClick={plusFontClickHandler}
              style={{
                color: "white",
                backgroundColor: "#d00155",
                cursor: "pointer",
                padding: "8px",
              }}
            />
          </div>
        ) : (
          <button
            style={{ width: "100%", cursor: "pointer" }}
            className="button"
            onClick={() => addItem(productInfo)}
          >
            Buy Now @ {price}
          </button>
        )}

      </div>
      <div className="phone">
        <div style={{ display: "flex" }}>
          <img style={{ width: "50%" }} src={imageURL} alt={name} />
          <div >
            <div style={{
              backgroundColor: "#eaeaea",
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px"
            }}>
              {description}
            </div>
            {present === true ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <FontAwesome
                  onClick={() => decreaseItem(productInfo)}
                  name="minus"
                  size="2x"
                  style={{
                    color: "white",
                    backgroundColor: "#d00155",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                />
                <p style={{ margin: "0px 10px", fontWeight: "bolder", fontSize: "1.3rem" }}>
                  {state.items[index] && state.items[index].quantity}
                </p>
                <FontAwesome
                  name="plus"
                  size="2x"
                  onClick={plusFontClickHandler}
                  style={{
                    color: "white",
                    backgroundColor: "#d00155",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                />
              </div>
            ) : (
              <button
                style={{ width: "100%", cursor: "pointer" }}
                className="button"
                onClick={() => addItem(productInfo)}
              >
                Buy Now @ {price}
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
