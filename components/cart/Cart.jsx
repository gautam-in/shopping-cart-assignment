/* eslint-disable @next/next/no-img-element */
import { connect } from "react-redux";
import { manageCart } from "../../redux/cartReducer";
import classes from "./Cart.module.css";
import { useRouter } from "next/router";

function Cart({ cart, total, manageCart }) {
  let cartItems = Object.entries(cart.itemsList);
  const router = useRouter();

  if (cartItems.length == 0)
    return (
      <div className={classes.empty}>
        <div>
          <span>
            <p className={classes.bold}>No items in your cart</p>
            <p>Your favourite items are just a click away</p>
          </span>
        </div>
        <span
          onClick={() => {
            router.push("/");
          }}
        >
          Start Shopping
        </span>
      </div>
    );

  const updateCart = (id, operator) => {
    const updatedCartObj = { ...cart, itemsList: { ...cart.itemsList } };
    const item = updatedCartObj.itemsList[id];
    if (operator === "+") {
      updatedCartObj.count = updatedCartObj.count + 1;
      item.count = item.count + 1;
    } else {
      updatedCartObj.count = updatedCartObj.count - 1;
      item.count = item.count - 1;
      if (item.count < 1) {
        delete updatedCartObj.itemsList[id];
      }
    }
    manageCart(updatedCartObj);
  };

  return (
    <div className={classes.background}>
      <div className={classes.total}>My Cart ({total} item)</div>
      {cartItems.map(([id, { name, price, imageURL, count }]) => (
        <div className={classes.container} key={id}>
          <img src={imageURL} alt={name}></img>
          <div className={classes.innerFlex}>
            <p>{name}</p>
            <div>
              <button
                className={classes.button}
                onClick={() => updateCart(id, "+")}
              >
                +
              </button>
              {count}
              <button
                className={classes.button}
                onClick={() => {
                  updateCart(id, "-");
                }}
              >
                -
              </button>
              X {price}
            </div>
          </div>
          <p> Rs.{price * count}</p>
        </div>
      ))}
      <div className={classes.offerBackground}>
        <div className={classes.offer}>
          <img src="/static/images/lowest-price.png" alt="lowest price"></img>
          <p>You won&apos;t find it cheaper anywhere</p>
        </div>
      </div>

      <footer className={classes.footer}>
        <p>Promo code can be applied on payments page</p>
        <p className={classes.checkout}>
          <span>Proceed to Checkout</span>
          <span>
            Rs.
            {cartItems.reduce(
              (total, [id, { count, price }]) => (total += count * price),
              0
            )}
            &gt;
          </span>
        </p>
      </footer>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.cart.count };
};

const mapDispatchToProps = (dispatch) => {
  return { manageCart: (updatedCart) => dispatch(manageCart(updatedCart)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
