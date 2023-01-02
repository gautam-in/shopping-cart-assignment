import React, { Suspense } from "react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { addToCart } from "../apis/add-to-cart"
import { getProducts, Product } from "../apis/product"
import { PRODUCT_PAGE } from "../constants/routes"
import { CartContext, CartContextItem } from "../context/cart"
import { Header } from "../layout/header"
import { ProductCard } from "../components/product-card"
import "./product-detail.scss"

type Props = {}

const ProductDetail: React.FC<Props> = () => {
  const { cartItems, addCartItem, setLoading } = useContext(CartContext)
  const [productsOfSameCategory, setProductsOfSameCategory] = useState<
    Product[]
  >([])
  const [product, setProduct] = useState<CartContextItem | null>(null)
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const id = params.get("id")

  useEffect(() => {
    const callAPI = async () => {
      try {
        const data = await getProducts()
        data.reduce((acc, currProduct) => {
          acc[currProduct.category] = currProduct
          return acc
        }, {} as { [key: string]: Product })
        const foundProduct = data.find((product) => product.id === id)
        if (foundProduct) {
          setProductsOfSameCategory(
            data.filter(
              ({ category, id }) =>
                foundProduct.category === category && foundProduct.id !== id,
            ),
          )
          const foundInCart = cartItems.find((cartItem) => cartItem.id === id)
          setProduct({
            ...foundProduct,
            quantity: foundInCart ? foundInCart.quantity : 0,
          })
        } else navigate(PRODUCT_PAGE)
      } catch (error) {
      } finally {
        // setLoading(false);
      }
    }
    callAPI()
  }, [setLoading, cartItems, id, navigate])

  useEffect(() => {
    setLoading(!product)
  }, [product, setLoading])

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

  const LazyProductDetailImage = React.lazy(
    () => import("../components/product-detail-image"),
  )

  return (
    product && (
      <>
        <Header />
        <div
          style={{
            width: "90%",
            margin: "auto",
            paddingTop: "100px",
            paddingLeft: "30px",
          }}
        >
          <main>
            <div className="container">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <Suspense fallback={null}>
                  <LazyProductDetailImage imageURL={product.imageURL} />
                </Suspense>
                <div>
                  <h3>{product.name}</h3>
                  <p style={{ margin: "20px 0" }}>{product.description}</p>
                  <strong>price per item: </strong> &nbsp;{product.price}
                  <br />
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        margin: "20px 0",
                        display: "flex",
                        textAlign: "center",
                        backgroundColor: "#F58822",
                        color: "white",
                        cursor: "pointer",
                        padding: "4px 10px",
                      }}
                    >
                      {product.quantity === 0 ? (
                        <span
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "0px 10px",
                          }}
                          onClick={(_) => addItem(product, 1)}
                        >
                          Add
                        </span>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            minWidth: "50px",
                            justifyContent: "space-around",
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "50px" }}>
              <h4 style={{ paddingBottom: "20px" }}>Similar products:</h4>
              <ul
                style={{
                  width: "100%",
                  display: "flex",
                  overflowY: "scroll",
                }}
              >
                {productsOfSameCategory.map((product) => (
                  <div
                    style={{
                      marginRight: "10px",
                    }}
                    key={product.id}
                  >
                    <ProductCard product={product} charLimit={15} />
                  </div>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </>
    )
  )
}

export default ProductDetail
