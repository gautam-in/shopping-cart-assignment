import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./product.css";
import "../header/header.css";
import toast, { Toaster } from "react-hot-toast";

const Product = (props) => {
  const param = useParams();
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [cartValue, setCartValues] = useState(0);
  const [selectedVal, setSeletedVal] = useState("");

  const getCategoryAndProducts = async (id) => {
    let url =
      id == 0
        ? "http://localhost:3000/products"
        : `http://localhost:3000/products?category=${id}`;
    try {
      const res = await Promise.all([
        fetch("http://localhost:3000/categories"),
        fetch(url),
        fetch("http://localhost:3000/cart"),
      ]);

      const jsonData = await Promise.all([
        res[0].json(),
        res[1].json(),
        res[2].json(),
      ]);
      setCategoriesData(jsonData[0]);
      setProductsData(jsonData[1]);
      let sum = 0;
      jsonData[2].forEach((x) => {
        sum += x.quantity;
      });

      setCartValues(sum);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { pId } = param;
    getCategoryAndProducts(pId);
  }, []);

  const getCartData = async (arr) => {
    const res = await fetch("http://localhost:3000/cart");
    const jsonData = await res.json();

    setCartValues(cartValue + 1);
    const isExist = jsonData.find((item) => item.id === arr.id);
    if (isExist) {
      isExist.quantity += 1;
      updateDataToCart(isExist, isExist.id);
    } else {
      arr.quantity = 1;
      addDataToCart(arr);
    }
  };

  const addDataToCart = (arr) => {
    try {
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arr),
      }).then((res) => {
        console.log("success", res);

        if (res.status == 201) {
          toast("Added");
        } else {
          toast("something went wrong!");
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const updateDataToCart = (arr, id) => {
    try {
      fetch("http://localhost:3000/cart/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arr),
      }).then((res) => {
        console.log("update success", res);
        if (res.status == 200) {
          toast("Added");
        } else {
          toast("something went wrong!");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const buyNow = (arr) => {
    getCartData(arr);
  };
  const handelChange = (e) => {
    console.log("select val", e.target.value);
    setSeletedVal(e.target.value);
    getCategoryAndProducts(e.target.value);
  };

  return (
    <div class="body">
      <Header cartHeaderVal={cartValue} />
      <aside>
        <div onClick={() => getCategoryAndProducts(0)} class="category-items">
          All Products
        </div>
        {categoriesData.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => getCategoryAndProducts(item.id)}
              class="category-items"
            >
              {item.name}
            </div>
          );
        })}
      </aside>
      {/* <label class='categoryLabel'for="categories">Choose a category:</label> */}
      <select
        name="category"
        id="category"
        value={selectedVal}
        onChange={handelChange}
      >
        <option class="category-items" value="0">
          All Products
        </option>
        {categoriesData.map((option) => (
          <option class="category-items" value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <main>
        {productsData.length > 0 ? (
          <section class="products">
            {productsData.map((item) => {
              return (
                <div key={item.id} open class="products__item">
                  <h1>{item.name}</h1>
                  <img
                    src={process.env.PUBLIC_URL + `${item.imageURL}`}
                    alt={`${item.name} `}
                  />
                  <p>{item.description}</p>
                  <span>
                    MRP
                    {new Intl.NumberFormat("en-IN", {
                      currency: "INR",
                      style: "currency",
                    }).format(item.price)}
                  </span>
                  <button onClick={() => buyNow(item)}>Buy Now</button>
                </div>
              );
            })}
          </section>
        ) : (
          <div className="no-product">No Product Found</div>
        )}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Product;
