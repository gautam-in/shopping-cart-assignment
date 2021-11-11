import { ProductList } from "../styles/ProductsStyle";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCartItem } from "../Redux/actions/actions";
import Error from "./Error";
import { getData } from "../utility/Datahandler";

const ProductListC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { query } = useRouter() || { query: { categoryId: "All" } };
  const [productList, setProductList] = useState([])
  const categoryId = query.categoryId;

  useEffect(() => {
    if (productList.length === 0) getData("/products")
      .then((response) => {
        setProductList(response);
      })
  }, []);

  useEffect(() => {
    if (categoryId && categoryId !== "All")
      setProducts(
        productList?.filter((product) => product.category === categoryId)
      );
    else setProducts(productList);
  }, [productList, categoryId]);

  const cartHandler = (item) => {
    dispatch(addCartItem(item));
    toast.success("Item added to cart");
  };

  return (
    <>
      {products.length === 0 ? (
        <Error errorMessage="Unable to fetch products." />
      ) : (
        <ProductList>
          {products.map((product) => (
            <div className="card" key={product.id}>
              <h4>{product.name}</h4>
              <div className="productContent">
                <Suspense fallback="<p>.Loading</p>">
                  <img src={product.imageURL} alt={product.name} />
                </Suspense>
                <p className="productDescription">{product.description}</p>
                <div>
                  <p className="productDescriptionMob">{product.description}</p>
                  <div>MRP Rs.{product.price}</div>
                  <button
                    className="BuyBtn"
                    onClick={() => cartHandler(product)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="BuyBtnTablet"
                    onClick={() => cartHandler(product)}
                  >
                    Buy Now @ Rs.{product.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ProductList>
      )}
    </>
  );
};

export default ProductListC;
