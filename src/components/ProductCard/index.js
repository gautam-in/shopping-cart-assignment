import React from "react";
import Button from "../Button";
import "./style.css";

function ProductCard(props) {
  const { product, onClick } = props;

  return (
    <section className="pcard">
      <h4>{product.name}</h4>
      <div className="pcard__details">
        <img className="pcard_img" src={product.imageURL} alt={product.name} />

        <div className="pcard__desc">
          <p className="pcard__para">{product.description}</p>

          <div className="pcard_btns">
            <div className="pcard__btns--big">
              <span>MRP Rs.{product.price}</span>
              <Button
                className="btn--big"
                onClick={() => {
                  onClick(product.id, product);
                }}
              >
                Buy Now
              </Button>
            </div>

            <Button
              className="pcard__btns--small"
              onClick={() => {
                onClick(product.id, product);
              }}
            >
              Buy Now @ Rs.{product.price}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;

// ProductCard.defaultProps = {
//   product: {
//     name: "Fresho Kiwi - Green, 3 pcs",
//     imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
//     price: 87,
//     stock: 50,
//     category: "5b6899953d1a866534f516e2",
//     sku: "fnw-kiwi-3",
//     id: "5b6c6a7f01a7c38429530883",
//   },
// };
