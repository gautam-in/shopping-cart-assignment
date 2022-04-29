import { useEffect, useState } from "react";
import SideMenu from "../../components/layout/SideMenu/SideMenu";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => {
          //console.log("Products = ", data);
          setProducts(data);
        });
    };
    fetchProducts();
  }, []);

  const filterProducts = (id) => {
    if (filtered) {
      setProducts(products);
      setFiltered(false);
    } else {
      const filtered = products.filter((p) => p.category === id);
      //console.log(products.filter((p) => p.category===id))
      setFilteredProducts(filtered);
      setFiltered(true);
    }
  };

  return (
    <div className="d-flex w-100 product-container-element">
      <SideMenu filterProducts={filterProducts}></SideMenu>
      {filtered && (
        <div className="product-container">
          {filteredProducts.map((p) => (
            <Product key={p.id} data={p} />
          ))}
        </div>
      )}
      {!filtered && (
        <div className="product-container">
          {products?.length ? (
            products.map((p) => <Product key={p.id} data={p} />)
          ) : (
            <p className="d-flex align-items-center justify-content-center">
              No item available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
