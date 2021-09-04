import { ProductList } from "../styles/ProductsStyle";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchProducts } from "../Redux/actions/thunk";
import { addCartItem } from "../Redux/actions/actions";
import ErrorComponent from "./ErrorComponent";

const ProductListComponent = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { query } = useRouter() || { query: { categoryId: "All" } };
  const productList = useSelector((state) => state.products.productList);
  const categoryId = query.categoryId;

  useEffect(() => {
    if (productList.length === 0) dispatch(fetchProducts());
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
        <ErrorComponent errorMessage="Unable to fetch products." />
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

export default ProductListComponent;
