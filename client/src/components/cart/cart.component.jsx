import { detectDevice } from "../../commonFunctions/detectDevice";
import React from "react";
import { connect } from "react-redux";
import "./cart.styles.scss";

const Cart = ({ setIsToggle, itemSelected, addToCartFn }) => {
  const totalAmount = () => {
    let total = 0;

    total = itemSelected.reduce(
      (previousValue, currentValue) => previousValue + currentValue.updatePrice,
      0
    );

    return total;
  };

  const handleQtyClick = (action, idx) => {
    let selectedData = [...itemSelected];
    if (action === "increase") {
      selectedData[idx].qty = selectedData[idx].qty + 1;
      selectedData[idx].updatePrice =
        selectedData[idx].qty * selectedData[idx].price;
    } else {
      if (selectedData[idx].qty == 1) {
        selectedData.splice(idx, 1);
      } else {
        selectedData[idx].qty = selectedData[idx].qty - 1;
        selectedData[idx].updatePrice =
          selectedData[idx].qty * itemSelected[idx].price;
      }
    }

    addToCartFn(selectedData, "update");
  };

  const renderItem = () => {
    const items = itemSelected.map((list, idx) => (
      <section className="cart-container__section2" key={idx}>
        <img src={list.imageURL} alt="Item Image" width="20%" height="70px" />
        <div className="cart-container__section2--align">
          <h4>{list.name}</h4>
          <div className="cart-container__innerSection1">
            <div
              className="increase-item"
              onClick={() => handleQtyClick("decrease", idx)}
            >
              &#10134;
            </div>
            <div>{list.qty}</div>
            <div
              className="decrease-item"
              onClick={() => handleQtyClick("increase", idx)}
            >
              &#10133;
            </div>
            <div>x</div>
            <div>Rs {list.updatePrice}</div>
          </div>
        </div>
        <div className="cart-container__innerSection2 cart-container__innerSection2--align">
          Rs {list.updatePrice ? list.updatePrice : list.price}
        </div>
      </section>
    ));

    return items;
  };

  return (
    <article
      className="cart-container"
      onClick={(e) => e.stopPropagation()}
      style={{
        height:
          detectDevice("mobile") || detectDevice("tablet")
            ? window.screen.height - 70
            : window.screen.height - 250,
      }}
    >
      <section className="cart-container__section1">
        <div>
          <strong>My Cart</strong>&nbsp;
          {itemSelected.length ? (
            <span>({itemSelected.length} items)</span>
          ) : null}
        </div>
        {!detectDevice("mobile") ? (
          <div onClick={() => setIsToggle(false)}>&#10006;</div>
        ) : null}
      </section>
      {itemSelected.length ? (
        <React.Fragment>
          <article
            style={{
              height:
                detectDevice("mobile") || detectDevice("tablet")
                  ? window.screen.height - 70
                  : window.screen.height - 350,
              overflow: "auto",
            }}
          >
            {renderItem()}
            <section className="lowest-price">
              <img
                src="/static/images/lowest-price.png"
                alt="Lowest price"
                width="30%"
                height="50px"
              />
              <p>You won't find it cheaper anywhere</p>
            </section>
          </article>
          <section className="cart-container__section3">
            <p>Promo Code can be applied on payment page</p>
            <div>
              <span>Proceed to Checkout</span>
              <span>Rs {totalAmount()}</span>
            </div>
          </section>
        </React.Fragment>
      ) : (
        <section
          className="empty-cart"
          style={{
            height:
              detectDevice("mobile") || detectDevice("tablet")
                ? window.screen.height - 70
                : window.screen.height - 350,
          }}
        >
          <h2 style={{ padding: "10px" }}>No items in your cart</h2>
          <p>Your Favourite items are just a click away</p>
        </section>
      )}
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    itemSelected: state.product.itemSelected,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    addToCartFn: (itemSelected, action) =>
      dispatch({
        type: "ADD_TO_CART_ITEM_DATA_ACTION",
        itemSelected: itemSelected,
        action: action,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Cart);
