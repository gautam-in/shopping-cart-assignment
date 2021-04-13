import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.scss";
import ProductsView from "./productsView";
import CategorySelect from "../mobileView/categorySelect";
 
const Product=({ categories }) => {
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState(null);
  const history = useHistory();

  const [itemlist, setList] = useState([]);

  React.useEffect(() => {
    
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:5000/products",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    let hash = history.location.hash;

    hash = hash.split("#");
    if (hash[1]) {  
      selectCategory(hash[1]);
      history.push("products");
      setCat(hash[1]);
    }
  }, [history]);

  const selectCategory =(category) => {
    setCat(category);
  }

  return (

    <main>
      <div className="sidebar">
        {categories
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((p,idx) => {
            return (
              <div
                style={{
                  backgroundColor: cat === p.id ? "lightgray" : "transparent",
                }}
                key={idx}
                onClick={() => selectCategory(p.id)}
              >
                {p.name}
              </div>
            );
          })}
      </div>
      <div className="catIcon">
        <span onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu />
        </span>
      </div>

      {menu && (<CategorySelect categories={categories} selectCategory={selectCategory} setMenu={setMenu} cat={cat}/>)}

      <ProductsView cat={cat} itemlist={itemlist}  />
    </main>
  );
}
export default Product;
