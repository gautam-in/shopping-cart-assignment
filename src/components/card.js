import React, { Component } from "react";
class Card extends Component {
  render() {
    const { quantity, data } = { ...this.props };
    return (
      <div className="cardBody">
        <div>
          <img src={process.env.PUBLIC_URL + data.imageURL}></img>
        </div>
        <section>
          <h3>{data.name}</h3>
          <div className="qtySet">
            <div>
              <button
                className="btn btn--round"
                onClick={() => this.props.editQty("dec", data.id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="btn btn--round"
                onClick={() => this.props.editQty("inc")}
              >
                +
              </button>
            </div>
            <p>X &nbsp;&nbsp;Rs.{data.price}</p>
          </div>
        </section>
        <p className="price">Rs.{data.price * quantity}</p>
      </div>
    );
  }
}

export default Card;
