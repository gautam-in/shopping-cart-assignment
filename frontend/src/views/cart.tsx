import { Header } from "../layout/header";
import { PRODUCT_PAGE } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import { useContext } from "react";
import { CartContext } from "../context/cart";

type Props = {};

export const Cart = (props: Props) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main style={{ width: "90%", margin: "auto", paddingTop: "100px" }}>
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
                      <p>
                        <strong>quantity:</strong> {product.quantity} &nbsp; |
                        &nbsp; <strong>price per item:</strong> {product.price}
                      </p>
                    </div>
                  </div>
                  <div>Rs. {product.quantity * product.price}</div>
                </div>
                <hr />
              </>
            ))
          )}
        </div>
      </main>
    </>
  );
};
