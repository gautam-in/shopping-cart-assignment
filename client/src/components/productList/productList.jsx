import { useEffect } from "react";
import "./productList.scss";
import Card from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/products/products.actions";
import { selectProductsList } from "../../redux/products/products.selectors";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { categoryId } = useParams();
  const products = useSelector(selectProductsList(categoryId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="productList-container">
      {products.length ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <h3 className="no-data">No products found</h3>
      )}
    </div>
  );
};

export default ProductList;
