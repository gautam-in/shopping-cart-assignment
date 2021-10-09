import { useEffect, useState } from "react";
import ProductTile from "./productTile";
import { PlpStyles, PlpWrapper } from "../styles/PlpStyles";
import { NavLink, useLocation } from "react-router-dom";
import { SideNavStyles, Dropdown } from "../styles/SideNavStyles";
import request from "./../library/utlis/request";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const getCategoryId = (categories, categoryName) => {
  return categories.find((category) => category.key === categoryName).id;
};

function PLP({ history }) {
  let categoryName = useQuery().get("category");
  const [products, setProducts] = useState([]);
  const [categoryID, setCategoryID] = useState(null);

  useEffect(() => {
    request("products").then((res) => {
      setProducts(res);
    });
  }, []);

  useEffect(() => {
    if (!!categoryName) {
      request("categories").then((res) => {
        setCategoryID(getCategoryId(res, categoryName));
      });
    }
  }, [categoryName]);

  const onCategorySelect = (event) => {
    const selectedCategory = event?.target?.value;
    !!selectedCategory
      ? history.push(`/products/?category=${selectedCategory}`)
      : history.push(`/products`);
  };

  return (
    <PlpWrapper>
      <Dropdown>
        <select id="dropdown" onClick={onCategorySelect}>
          <option value="">Please Select</option>
          <option value="fruit-and-veg">Fruits & Vegetables</option>
          <option value="bakery-cakes-dairy">Bakery Cakes and Diary</option>
          <option value="beverages">Beverages</option>
          <option value="beauty-hygiene">Beauty and Hygiene</option>
          <option value="baby">Baby Care</option>
        </select>
      </Dropdown>
      <SideNavStyles>
        <NavLink to="/products?category=fruit-and-veg">
          Fruits & Vegetables
        </NavLink>
        <NavLink to="/products?category=bakery-cakes-dairy">
          Bakery Cakes and Diary
        </NavLink>
        <NavLink to="/products?category=beverages">Beverages</NavLink>
        <NavLink to="/products?category=beauty-hygiene">
          Beauty and Hygiene
        </NavLink>
        <NavLink to="/products?category=baby">Baby Care</NavLink>
      </SideNavStyles>
      <PlpStyles>
        {products.map((product) => {
          return categoryName && categoryID ? (
            product.category === categoryID ? (
              <ProductTile key={product.id} {...product} />
            ) : null
          ) : (
            <ProductTile key={product.id} {...product} />
          );
        })}
      </PlpStyles>
    </PlpWrapper>
  );
}

export default PLP;
