import { useEffect, useState } from "react";
import SideMenuComponent from "../../components/SideMenuComponent/SideMenuComponent";
import ProductComponent from "./ProductComponent";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => {
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
      setFilteredProducts(filtered);
      setFiltered(true);
    }
  };

  return (
    <div className="d-flex w-100 product-container-element">
      <SideMenuComponent filterProducts={filterProducts}></SideMenuComponent>


      {filtered && (
        <div className="row product-card-class card-flex-align">
          {filteredProducts.map((p) => (
            <ProductComponent key={p.id} data={p} />
            
          ))}
        </div>

      )}
      {!filtered && (
        <div className="row product-card-class card-flex-align">
          {products?.length ? (
            products.map((p) => <ProductComponent key={p.id} data={p} />)
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

export default ProductsComponent;