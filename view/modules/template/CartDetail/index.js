import Button from "../../../common/components/atoms/Button";
import style from "./CartDetail.module.scss";
import CartItem, { CartEndMessage } from "../../CartItem";
import { useStore } from "../../../common/context/productActions";
import { useRouter } from "next/router";

export default function CartDetail({ hidden }) {
  const router = useRouter();
  const {
    items,
    total,
    totalquantity,
    user,
    cartOpen,
    setCloseCart,
    doCartEmpty,
  } = useStore();
  if (cartOpen) {
    return (
      <>
        <div className={style.container}>
          <div className={style.showinMobile}></div>
          <div
            className={style.header}
            style={totalquantity ? {} : { background: "Black", color: "white" }}
          >
            <div className="cartTitle">
              <span style={{ fontSize: `1.2rem`, fontWeight: 900 }}>
                My Cart
              </span>{" "}
              {totalquantity ? <span>{` (${totalquantity} item)`}</span> : ""}
            </div>
            <div
              className={style.cartCloseButton}
              style={totalquantity ? {} : { display: "flex" }}
              onClick={() => setCloseCart()}
            >
              x
            </div>
          </div>
          <div className={style.content}>
            {totalquantity ? (
              items.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })
            ) : (
              <div className={style.emptyCart}>
                <h3>No items in your cart</h3>
                <p>Your favourite items are just a click away</p>
              </div>
            )}
            {}
            {totalquantity ? (
              <CartEndMessage message="You wont find it cheaper anywhere" />
            ) : (
              ""
            )}
          </div>
          <div className={style.footer}>
            {totalquantity ? (
              <>
                <p>Promo code can be applied on payment page</p>
                <Button
                  onClick={() => {
                    setCloseCart();
                    alert("Thanks For Shopping");
                    doCartEmpty();
                    router.push(`/`);
                  }}
                >
                  <div className={style.checkOutButton}>
                    <span>Proceed To Checkout</span>
                    <span> {`Rs. ${total}  >`}</span>
                  </div>
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setCloseCart();
                  router.push(`/`);
                }}
              >
                Start Shopping{" "}
              </Button>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
