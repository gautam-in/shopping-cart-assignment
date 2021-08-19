import React, { useEffect, useState } from "react";
import "./productList.scss";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const ProductList = ({ activeCategory, setCart }) => {
  const [filteredData, setFilteredData] = useState([]);
  // Queries
  const { isLoading, isError, data } = useQuery("products", async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    return data;
  });

  //Mutation
  const { mutate, isLoading: isMutationLoading } = useMutation(
    (id) => axios.post("http://localhost:5000/addToCart"),
    {
      onSuccess: (data, variables, context) => {
        // set cart state
        setCart((prev) => {
          if (prev[variables]) {
            prev[variables] += 1;
            return { ...prev };
          }
          return { ...prev, [variables]: 1 };
        });
      },
    }
  );

  useEffect(() => {
    if (activeCategory && data) {
      setFilteredData(
        data.filter(
          ({ category, ...rest }) =>
            category === activeCategory && { category, ...rest }
        )
      );
    } else if (data && !activeCategory) {
      setFilteredData(data);
    }
  }, [activeCategory, data]);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something went wrong ...</p>;

  return (
    <div className="grid_4_col">
      {filteredData.map(({ description, id, imageURL, name, price, stock }) => (
        <div className="product_grid" key={id}>
          <h4 className="product_name">{name}</h4>
          <img src={imageURL} alt={description} className="product_img" />
          <p className="product_description">{description}</p>
          <p className="product_price">MRP Rs. {price}</p>
          <button
            className="buy_button"
            disabled={isMutationLoading}
            onClick={() => {
              mutate(id);
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
