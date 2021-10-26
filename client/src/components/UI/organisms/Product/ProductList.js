import React, { useEffect, useState } from "react";
import Api from "../../atoms/util/Api";
import Card from "../../molecules/PLCL/Card";
import "./ProductList.scss";

const ProductList = ({ filterId }) => {
  const [products, setProducts] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    Api.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    if (filterId) {
      setDisplayList(() =>
        products.filter((product) => product.category === filterId)
      );
    } else {
      setDisplayList(products);
    }
  }, [filterId, products]);

  const productsContent = displayList?.map((product) => {
    const { id } = product;
    return (
      <li key={id} className="col-sm-12 col-md-6 col-lg-3 col-xs-3">
        <Card product={product} />
      </li>
    );
  });
  return (
    <div className="product-list-wrap">
      <ul className="clearfix row">{productsContent}</ul>
    </div>
  );
};
export default ProductList;
