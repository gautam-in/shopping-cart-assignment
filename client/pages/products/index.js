import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import Button from "../../components/ui/Button";
import style from "../../styles/Product.module.css";
import { useRouter } from "next/router";
import Loader from "../../components/common/Spinner/spinner";

export default function Product({ categorydata, products, selectedcategory }) {
  const [hidden, setHidden] = useState(true);
  const [categoryName, setcategoryName] = useState("");
  const [categoryId, setcategoryId] = useState(selectedcategory);
  const [productsdata, setProductsdata] = useState(products);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function onCategorySelected(id) {
    getCategoryData(id);
    setHidden(true);
    setLoading(true);
  }
  async function getCategoryData(id) {
    const products_response = await fetch(
      `http://localhost:3000/api/products/${id}`
    );
    const products_data = await products_response.json();
    setProductsdata(products_data);
    setLoading(false);
    router.push(`/products?category=${id}`, undefined, { shallow: true });
  }

  categoryName == "" ? setcategoryName("All Categories") : "";
  return (
    <>
      <div className={style.grid_container}>
        <div className={style.filter}>
          <div className={style.button} onClick={() => setHidden(!hidden)}>
            <Button>
              <div className={style.textContainer}>
                <div>{categoryName}</div>
                <div>&#9661;</div>
              </div>
            </Button>
          </div>
          <ul className={hidden ? style.hidden : ""}>
            {categorydata.map(({ name, id }) => {
              const activeClass = categoryId == id ? "active" : "";
              return (
                <li
                  key={id}
                  className={style[activeClass]}
                  onClick={(e) => {
                    setcategoryName(name);
                    setcategoryId(id);
                    onCategorySelected(id);
                  }}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.products}>
          <Loader loading={loading} />
          {productsdata.length > 0 ? (
            <div className={style.Product_Outer_container}>
              {productsdata.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className={style.No_Data}>
              No Data Available for this category
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const querystring = category ? `/${category}` : "";
  const category_response = await fetch("http://localhost:3000/api/category");
  const category_data = await category_response.json();
  const products_response = await fetch(
    `http://localhost:3000/api/products${querystring}`
  );
  const products_data = await products_response.json();
  return {
    props: {
      products: products_data,
      categorydata: category_data,
      selectedcategory: category ? category : "",
    },
  };
}
