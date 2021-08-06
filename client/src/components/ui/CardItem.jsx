import React from "react"
import FontAwesome from "react-fontawesome";
function CardItem({ itemInfo, increment, decrease }) {
  const { name, quantity, imageURL, price } = itemInfo;

  return (
    <div className="card-item">
      <div style={{ width: "20%" }}>
        <img style={{ width: "100%" }} src={imageURL} alt={name} />
      </div>

      <div className="card-item-header">
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bolder",
            marginBottom: "0rem",
          }}
        >
          {name}
        </p>
        <div className="card-item-info">
          <FontAwesome
            onClick={decrease}
            name="minus"
            style={{
              color: "white",
              backgroundColor: "#d00155",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          />
          <p style={{ marginRight: "1rem" }}>{quantity}</p>

          <FontAwesome
            name="plus"
            onClick={increment}
            style={{
              color: "white",
              backgroundColor: "#d00155",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "3rem",
              cursor: "pointer",
            }}
          />
          <FontAwesome name="times" style={{ marginRight: "2rem" }} />
          <p style={{ marginRight: "auto", fontWeight: "bold" }}>Rs {price}</p>
          <p
            style={{
              alignSelf: "flex-end",
              marginLeft:"1rem",
              fontWeight: "bold",
              marginRight: "2rem"
            }}
          >
            Rs {price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
