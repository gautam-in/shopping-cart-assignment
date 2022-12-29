import { Header } from "../layout/header";
import { PRODUCT_PAGE } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import { useState } from "react";
import { Product } from "../apis/product";

type Props = {};

export const Cart = (props: Props) => {
  const [doesItemsExist, setDoesItemsExist] = useState<boolean>(true);
  const products: Product[] = [
    {
      name: "Fresho Kiwi - Green, 3 pcs",
      imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      description:
        "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      price: 87,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-kiwi-3",
      id: "5b6c6a7f01a7c38429530883",
    },
    {
      name: "Fresho Kiwi - Green, 3 pcs",
      imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      description:
        "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      price: 87,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-kiwi-3",
      id: "5b6c6a7f01a7c38429530883",
    },
    {
      name: "Fresho Kiwi - Green, 3 pcs",
      imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      description:
        "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      price: 87,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-kiwi-3",
      id: "5b6c6a7f01a7c38429530883",
    },
    {
      name: "Fresho Kiwi - Green, 3 pcs",
      imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      description:
        "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      price: 87,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-kiwi-3",
      id: "5b6c6a7f01a7c38429530883",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main style={{ width: "90%", margin: "auto", paddingTop: "100px" }}>
        <div className="card">
          <header>Shopping Cart</header>
          <hr style={{ margin: "20px 0px" }} />
          {!doesItemsExist ? (
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
            products.map((product) => (
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
                        <strong>quantity:</strong> 5 &nbsp; | &nbsp;{" "}
                        <strong>price per item:</strong> 2000
                      </p>
                    </div>
                  </div>
                  <div>Rs. 10000</div>
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
