import React, { useState, useEffect, useContext } from "react";
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Grid } from "@material-ui/core";
import Product from "../../Components/Product/Product";
import { getProductList } from "../../Services/services";
import SelectProducts from "../../Components/SelectProducts/SelectProducts";
import { CategoryContext } from "../../Context/CategoryContext";
import "./Products.scss";

const Products = () => {
  const { categories, selected, setSelected } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState(new Date());

  const getListOfProducts = async () => {
    const result = await getProductList();
    setProducts(result);
  };

  useEffect(() => {
    setSelected(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    getListOfProducts();
  }, []);
  return (
    <>
      <Header changed={date} />
      <section className="content-section">
        <aside>
          <LeftMenu
            categories={categories}
            handleFilter={setSelected}
            selected={selected}
          />
        </aside>
        <main>
          <section className="content-products-list">
          <div className="content-products-category">
            <SelectProducts
              categories={categories}
              handleFilter={setSelected}
              selected={selected}
            />
          </div>
          <div className="content-products-listitem">
            <Grid container item spacing={2}>
              {products?.filter((x) =>
                  selected !== "" ? x.category === selected : true
                )
                .map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2} >
                    <Product key={index} data={item} setDate={setDate} />
                  </Grid>
                ))}
            </Grid>
          </div>
          </section>
        </main>
      </section>
      <Footer />
    </>
  );
}
export default Products;