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
    <div className="backdrop" onClick={(_) => setIsCartDisplayed(false)}>
      <div className="cart-container">
        <div
          className="cart"
          style={{
            backgroundColor: GREY_COLOR,
          }}
          onClick={(_) => {
            _.stopPropagation()
            _.preventDefault()
          }}
        >
          <div className="cart-header">
            <div>
              My Cart {cartItems.length ? `(${cartItems.length} item(s))` : ""}
            </div>
            <button
              className="close-cart-button"
              onClick={(_) => {
                _.stopPropagation()
                _.preventDefault()
                setIsCartDisplayed(false)
              }}
            >
              X
            </button>
          </div>
          <div className="cart-items-container">
            {!cartItems.length ? (
              <div className="empty-cart-list">
                <p>There are no items in your cart.</p>
              </div>
            ) : (
              cartItems.map((product) => (
                <div className="cart-item-container" key={product.id}>
                  <img
                    src={product.imageURL}
                    alt=""
                    className="product-image"
                  />
                  <div className="product-info-container">
                    <h5 className="product-name">{product.name}</h5>
                    <p className="product-description">
                      <div className="product-quantity-container">
                        <button
                          onClick={(_) => {
                            _.stopPropagation()
                            addItem(product, -1)
                          }}
                          className="product-quantity-button"
                          style={{
                            backgroundColor: THEME_COLOR,
                          }}
                        >
                          -
                        </button>
                        <div className="product-quantity">
                          {product.quantity}
                        </div>

                        <button
                          onClick={(_) => {
                            _.stopPropagation()
                            if (product.stock > product.quantity)
                              addItem(product, 1)
                          }}
                          className="product-quantity-button"
                          style={{
                            backgroundColor: THEME_COLOR,
                          }}
                        >
                          +
                        </button>
                        <button
                          className="item-delete-button"
                          onClick={() => {
                            addItem(product, -product.quantity)
                          }}
                        >
                          X
                        </button>
                        <div>Rs. {product.price}</div>
                      </div>
                      <div>Rs. {product.quantity * product.price}</div>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length ? (
            <div className="non-empty-cart-footer-container">
              <div className="checkout-content-container">
                <p>Promo code can be applied on payment page</p>
                <div
                  role="button"
                  className="checkout-button"
                  style={{
                    backgroundColor: THEME_COLOR,
                  }}
                >
                  <button>Proceed to checkout</button>
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
              className="empty-cart-footer-container"
              role="button"
              onClick={(_) => setIsCartDisplayed(false)}
            >
              <button
                className="keep-shopping-button"
                style={{ backgroundColor: THEME_COLOR }}
              >
                <div>Keep Shopping</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
