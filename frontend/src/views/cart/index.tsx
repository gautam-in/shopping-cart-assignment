import { useContext } from "react"
import { CartContext } from "../../context/cart"
import { Product } from "../../apis/product"
import { addToCart } from "../../apis/add-to-cart"
import { GREY_COLOR, THEME_COLOR } from "../../constants/colors"
import "./index.scss"

type Props = {}

const Cart = (props: Props) => {
  const { cartItems, addCartItem, setLoading, setIsCartDisplayed } =
    useContext(CartContext)

  const addItem = async (product: Product, quantity: number) => {
    try {
      setLoading(true)
      await addToCart()
      addCartItem(product, quantity)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.2)",
        height: "100%",
        width: "100%",
        zIndex: 300,
        cursor: "pointer",
      }}
      onClick={(_) => setIsCartDisplayed(false)}
    >
      <div
        style={{
          height: "100%",
          width: "90%",
          margin: "auto",
          bottom: 0,
          right: "5%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: "700px",
            width: "500px",
            overflow: "scroll",
            backgroundColor: GREY_COLOR,
            cursor: "default",
          }}
          onClick={(_) => {
            _.stopPropagation()
            _.preventDefault()
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "10%",
              padding: "0 20px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <div>
              My Cart {cartItems.length ? `(${cartItems.length} item(s))` : ""}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={(_) => {
                _.stopPropagation()
                _.preventDefault()
                setIsCartDisplayed(false)
              }}
            >
              X
            </div>
          </div>
          <div
            style={{
              padding: "2px 0",
              position: "static",
              height: "78%",
              overflowY: "scroll",
            }}
          >
            {!cartItems.length ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <p>There are no items in your cart.</p>
              </div>
            ) : (
              cartItems.map((product) => (
                <div
                  style={{
                    margin: "5px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                  }}
                  key={product.id}
                >
                  <div
                    style={{
                      padding: "30px 0 30px 30px",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <img
                      src={product.imageURL}
                      alt=""
                      style={{
                        marginRight: "20px",
                        height: "60px",
                        width: "60px",
                      }}
                    />
                    <div style={{ paddingLeft: "5px", width: "100%" }}>
                      <h5 style={{ marginBottom: "10px" }}>{product.name}</h5>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "0 15px 0 0px ",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "2px 0px",
                            textAlign: "center",
                            backgroundColor: "white",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            onClick={(_) => {
                              _.stopPropagation()
                              addItem(product, -1)
                            }}
                            style={{
                              backgroundColor: THEME_COLOR,
                              color: "white",
                              padding: "5px 11px",
                              borderRadius: "50px",
                            }}
                          >
                            -
                          </div>
                          <div style={{ color: "black", margin: "0 5px" }}>
                            {product.quantity}
                          </div>

                          <div
                            onClick={(_) => {
                              _.stopPropagation()
                              if (product.stock > product.quantity)
                                addItem(product, 1)
                            }}
                            style={{
                              backgroundColor: THEME_COLOR,
                              color: "white",
                              padding: "5px 11px",
                              borderRadius: "50px",
                            }}
                          >
                            +
                          </div>
                          <div
                            style={{ margin: "0 10px 0 30px" }}
                            onClick={() => {
                              addItem(product, -product.quantity)
                            }}
                          >
                            X
                          </div>
                          <div>Rs. {product.price}</div>
                        </div>
                        <div>Rs. {product.quantity * product.price}</div>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "12%",
                padding: "0 20px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <p>Promo code can be applied on payment page</p>
                <div
                  role="button"
                  style={{
                    display: "flex",
                    backgroundColor: THEME_COLOR,
                    color: "white",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                    height: "35px",
                    padding: "0 15px",
                    borderRadius: "3px",
                  }}
                >
                  <div>Proceed to checkout</div>
                  <div>
                    Rs.{" "}
                    {cartItems.reduce((acc, currValue) => {
                      return acc + currValue.quantity * currValue.price
                    }, 0)}{" "}
                    &nbsp; &gt;
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "12%",
                padding: "0 20px",
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
              }}
              role="button"
              onClick={(_) => setIsCartDisplayed(false)}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  backgroundColor: THEME_COLOR,
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  height: "35px",
                  padding: "0 15px",
                  borderRadius: "3px",
                }}
              >
                <div>Keep Shopping</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* {!cartItems.length ? (
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
                onClick={(_) => navigate(PRODUCTS_PAGE)}
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
                    margin: "30px 0 30px 30px",
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
                    <div style={{ paddingLeft: "40px" }}>
                      <h3 style={{ marginBottom: "10px", marginTop: "50px" }}>
                        {product.name}
                      </h3>
                      <p style={{ margin: "20px 0px" }}>
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
                              _.stopPropagation()
                              addItem(product, -1)
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
                                _.stopPropagation()
                                addItem(product, 1)
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
              </>
            ))
          )} */}
      {/* <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Total:{" "}
            {cartItems.reduce((acc, currValue) => {
              return acc + currValue.quantity * currValue.price
            }, 0)}
          </div> */}
      {/* {cartItems.length ? (
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
                onClick={(_) => navigate(PRODUCTS_PAGE)}
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
          ) : null} */}
    </div>
  )
}

export default Cart
