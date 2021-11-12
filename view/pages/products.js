import { useState } from "react";
import ProductItem from "../modules/ProductItem";
import Button from "../common/components/atoms/Button";
import style from "../styles/Product.module.scss";
import { useRouter } from "next/router";
import Loader from "../common/components/shared/Loader";

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
    const response = await fetch("http://localhost:5000/products");
    const banners = await response.json();
    const specificProduct = banners.filter((item) => item.category == id);
    setProductsdata(specificProduct);
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
                <ProductItem key={item.id} item={item} />
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
  const category_response = await fetch("http://localhost:3000/api/categories");
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
