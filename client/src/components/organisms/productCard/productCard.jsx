import Button from "../../atoms/button/button";
import Card from "../../molecules/card/card";
import Image from "../../atoms/image/image";
import { useParams } from "react-router-dom";
import "./productCard.scss";
import { useDispatch } from "react-redux";
import { productsActions } from "../../../pages/products/redux/actions";

function ProductCard(props) {
  const { productsData } = props;
  let params = useParams();
  const dispatch = useDispatch();

  const handleOnClickBuyProduct = (product) => {
    dispatch(
      productsActions.cartItemActions.addCartItem(product, productsData)
    );
  };

  return (
    <div>
      <Card>
        {productsData
          ?.filter(({ category }) => category === params.id)
          ?.map((product) => {
            return (
              <div
                className="productCard d-flex flex-column flex-lg-wrap"
                key={product.id}
              >
                <h3 className="productCard__header">{product.name}</h3>

                <div className="d-flex d-md-flex justify-content-between">
                  <Image
                    className="productCard__image mb-2"
                    imageSrc={product.imageURL}
                    alt={product.name}
                  />
                  <p className="productCard__description">
                    {product.description}
                  </p>
                </div>
                <div className="productCard__footer d-flex justify-content-between align-items-center">
                  {/* <p className="productCard__footer-price">
                      MRP <span> &#8377;</span>
                      {`${product.price}`}
                    </p> */}
                  <div>
                    <Button  onClick={() => handleOnClickBuyProduct(product)}>
                      BUY NOW @ <span> &#8377;</span>
                      {`${product.price}`}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </Card>
    </div>
  );
}

export default ProductCard;
