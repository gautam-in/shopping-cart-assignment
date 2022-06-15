import React, { useState, useEffect, useContext } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import Header from "../Home/Header/Header";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { getProductList } from "../../Services/services";
import CustomizedSelect from "./CustomizedSelect/CustomizedSelect";
import { CategoryContext } from "../../Context/CategoryContextState";
import "./Products.scss";

export default () => {
  const { categories, selected, setSelected } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState(new Date());

  const getListOfProducts = async () => {
    const result = await getProductList();
    setProducts(result);
  };

  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  useEffect(() => {
    getListOfProducts();
  }, []);
  return (
    <>
      <Header changed={date} />
      <section className="section-product">
        <aside>
          <LeftMenu
            categories={categories}
            handleFilter={setSelected}
            selected={selected}
          />
        </aside>
        <main>
          <div className="hidden-header-menu">
            <CustomizedSelect
              categories={categories}
              handleFilter={setSelected}
              selected={selected}
            />
          </div>
          <div className="scroll-container">
            <Grid container spacing={2}>
              {products
                .filter((x) =>
                  selected != "" ? x.category === selected : true
                )
                .map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} spacing={2}>
                    <Product data={item} setDate={setDate} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </main>
      </section>
      <section className="footer-section">
      Copyright &#169; 2011-2018 Sabka Bazar Grocery Suppplies Pvt Ltd
    </section>
    </>
  );
};
