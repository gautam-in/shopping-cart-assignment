import React, { useState, useEffect } from "react";
import LeftMenu from "Components/LeftMenu/LeftMenu";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import { Grid } from "@material-ui/core";
import Product from "Components/Product/Product";
import { getProductList } from "Services/services";
import CustomizedSelect from "Components/CustomizedSelect/CustomizedSelect";
import "./Products.scss";

export default () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState(new Date());
  const [filterId, setFilterId] = useState("");

  const handleFilter = (id) => {
    setFilterId(id);
  };

  const getListOfProducts = async () => {
    const result = await getProductList();
    setProducts(result);
  };

  useEffect(() => {
    getListOfProducts();
  }, []);
  return (
    <>
      <Header changed={date} />
      <section className="section-product">
        <aside>
          <LeftMenu handleFilter={handleFilter} />
        </aside>
        <main>
          <div className="hidden-header-menu">
            <CustomizedSelect handleFilter={handleFilter} />
          </div>
          <div className="scroll-container">
            <Grid container spacing={2}>
              {products
                .filter((x) =>
                  filterId != "" ? x.category === filterId : true
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
      <Footer />
    </>
  );
};
