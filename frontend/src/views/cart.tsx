import { Header } from "../layout/header";
import { PRODUCT_PAGE } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Product } from "../apis/product";
import { AddToCart } from "../apis/add-to-cart";

type Props = {};

export const Cart = (props: Props) => {
  const { cartItems, addCartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const addItem = async (product: Product, quantity: number) => {
    try {
      await AddToCart();
      addCartItem(product, quantity);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main
        style={{
          width: "90%",
          margin: "auto",
          paddingTop: "100px",
          marginBottom: "20px",
        }}
      >
        <div className="card">
          <header>Shopping Cart</header>
          <hr style={{ margin: "20px 0px" }} />
          {!cartItems.length ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p>There are no items in your cart.</p>
              <button
                style={{
                  margin: "20px 0px 20px 20px",
                  backgroundColor: "#F58822",
                  borderColor: "transparent",
                  padding: "20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={(_) => navigate(PRODUCT_PAGE)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((product) => (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "30px 0 0 30px",
                  }}
                  key={product.id}
                >
                  <div
                    style={{
                      flexBasis: "80%",
                      display: "flex",
                    }}
                  >
                    <img
                      src={product.imageURL}
                      alt=""
                      style={{ marginRight: "20px" }}
                    />
                    <div>
                      <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>
                      <p style={{ marginBottom: "5px" }}>
                        {product.description}
                      </p>
                      <p style={{ display: "flex" }}>
                        <strong>quantity:</strong>{" "}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            margin: "0 5px",
                            textAlign: "center",
                            backgroundColor: "#F58822",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            onClick={(_) => {
                              _.stopPropagation();
                              addItem(product, -1);
                            }}
                          >
                            -
                          </div>
                          <div style={{ padding: "0 5px" }}>
                            {product.quantity}
                          </div>

                          {product.stock > product.quantity && (
                            <div
                              onClick={(_) => {
                                _.stopPropagation();
                                addItem(product, 1);
                              }}
                            >
                              +
                            </div>
                          )}
                        </div>
                        &nbsp; | &nbsp; <strong>price per item:</strong>{" "}
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div>Rs. {product.quantity * product.price}</div>
                </div>
                <hr />
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  Total:{" "}
                  {cartItems.reduce((acc, currValue) => {
                    return acc + currValue.quantity * currValue.price;
                  }, 0)}
                </div>
              </>
            ))
          )}
          {cartItems.length ? (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  margin: "20px 0px 20px 20px",
                  backgroundColor: "white",
                  padding: "20px",
                  border: "0.5px solid black",
                  borderRadius: "4px",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={(_) => navigate(PRODUCT_PAGE)}
              >
                Continue Shopping
              </button>
              <button
                style={{
                  margin: "20px 0px 20px 20px",
                  backgroundColor: "#F58822",
                  borderColor: "transparent",
                  padding: "20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={(_) => {}}
              >
                Proceed To Checkout
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
};
