import React, { useEffect, useState } from "react";
import { ShopContainer, SideBar, Category, SideBarMob } from "./Shop.styles.js";
import api from "../../api/data";
import Products from "../../Components/Products/Products.component";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      let response = await api.get("/categories");
      let data = await response.data;
      setCategories(data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const cat = e.target.value;
    const catId = categories.find((category) => category.buttonText === cat).id;
    navigate(`/shop/${cat}`, { state: catId });
  };

  return (
    <ShopContainer className="container">
      <SideBarMob onChange={handleChange}>
        {categories.map(({ id, name, buttonText }) => (
          <option value={buttonText} key={id}>
            {name}
          </option>
        ))}
      </SideBarMob>
      <SideBar>
        {categories.map(({ id, name, buttonText }) => (
          <Category
            onClick={() => {
              navigate(`/shop/${buttonText}`, { state: id });
            }}
            key={id}
          >
            {name}
          </Category>
        ))}
      </SideBar>
      <Products />
    </ShopContainer>
  );
};

export default Shop;
