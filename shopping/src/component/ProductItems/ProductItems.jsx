import React, { useEffect, useState, useMemo, useRef } from "react";
import ProductItem from "./ProductsItem/ProductItem";
import axios from "axios";
import "./productItems.css";
import { cartContext } from "../../Context/CartContext";

function ProductItems({ idCategoryFilter, toggleElement, params }) {
  const [productList, setProductList] = useState([]);
  const [fistLoad, setFirstLoad] = useState([]);
  const prevCountRef = useRef();
  const baseURL = "http://localhost:5000/products";
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL).then((response) => {
          setFirstLoad(response.data);
          const result = response.data;
          console.log(fistLoad);

          if (params !== null) {
            const list = result.filter((item) => {
              if (item.category === params) {
                return item;
              }
            });
            setProductList(list);
          } else {
            setProductList(response.data);
          }
          console.log(idCategoryFilter);
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const filterFunction = (idCategoryFilter, toggleElement) => {
    console.log("filter");
    if (toggleElement) {
      const list = fistLoad.filter((item) => {
        if (item.category === idCategoryFilter) {
          return item;
        }
      });
      setProductList(list);
    } else {
      setProductList(fistLoad);
    }
  };

  useEffect(() => {
    filterFunction(idCategoryFilter, toggleElement);
  }, [idCategoryFilter, toggleElement]);

  return (
    <div className="products">
      <div className="cards">
        {productList.length > 0 ? (
          productList.map((item) => {
            return (
              <ProductItem
                {...item}
                key={item.id}
                selectedIdsprop={selectedIds}
                setSelectedIdsprop={setSelectedIds}
              />
            );
          })
        ) : (
          <p>No result found</p>
        )}
      </div>
    </div>
  );
}

export default ProductItems;
