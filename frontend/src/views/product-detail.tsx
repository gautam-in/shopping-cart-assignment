import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AddToCart } from "../apis/add-to-cart";
import { getProducts, Product } from "../apis/product";
import { PRODUCT_PAGE } from "../constants/routes";
import { CartContext, CartContextItem } from "../context/cart";
import { Header } from "../layout/header";
import "./product-detail.scss";

type Props = {};

export const ProductDetail: React.FC<Props> = () => {
  const { cartItems, addCartItem } = useContext(CartContext);
  const [productsOfSameCategory, setProductsOfSameCategory] = useState<
    Product[]
  >([]);
  const [product, setProduct] = useState<CartContextItem | null>(null);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const id = params.get("id");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const data = await getProducts();
        data.reduce((acc, currProduct) => {
          acc[currProduct.category] = currProduct;
          return acc;
        }, {} as { [key: string]: Product });
        const foundProduct = data.find((product) => product.id === id);
        if (foundProduct) {
          setProductsOfSameCategory(
            data.filter(({ category }) => foundProduct.category === category)
          );
          const foundInCart = cartItems.find((cartItem) => cartItem.id === id);
          setProduct({
            ...foundProduct,
            quantity: foundInCart ? foundInCart.quantity : 0,
          });
        } else navigate(PRODUCT_PAGE);
      } catch (error) {}
    };
    callAPI();
  }, [cartItems, id, navigate]);

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
      <div
        style={{
          width: "90%",
          margin: "auto",
          paddingTop: "100px",
        }}
      >
        <main>
          <div className="container">
            {product && (
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
                      <div style={{ display: "flex" }}>
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
                      </div>
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
            )}
          </div>
        </main>
      </div>
    </>
  );
};
