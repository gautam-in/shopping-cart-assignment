/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import classes from "./Nav.module.css";
import { connect } from "react-redux";

function Nav({ count, user }) {
  console.log(user);
  return (
    <>
      <span className={classes.home}>
        <Link href="/home">Home</Link>
      </span>
      <span className={classes.products}>
        <Link href="/products">Products</Link>
      </span>
      {user || (
        <span className={classes.signin}>
          <Link href="/login">Signin</Link>
        </span>
      )}
      {user || (
        <span className={classes.register}>
          <Link href="/signup">Register</Link>
        </span>
      )}
      <Link href="/cart">
        <span className={classes.cart}>
          <img src="/static/images/cart.svg" alt="cart" />
          {count} items
        </span>
      </Link>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.cart.count,
    user: state.user.loggedIn,
  };
};
export default connect(mapStateToProps)(Nav);
