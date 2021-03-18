import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Card from "./lib/card";
import "./index.scss";
import Aside from "./lib/aside"
import AsideMobile from "./lib/asideMobile"

function Product({ categories }) {
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
     setCat(hash[1]);
      history.push("products");
      setCat(hash[1]);
    }
  }, []);


 
  return (
    <div className="productContainer">
        <Aside cat={cat} categories={categories} setCat={setCat} />

      <div className="catIcon">
        <span onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu />
        </span>
      </div>
      {menu && (
        <AsideMobile cat={cat} categories={categories} setCat={setCat} setMenu={setMenu}/>
      )}

      <main className="mainContainer">
        {itemlist
          .filter((item) => (cat == null ? true : item.category === cat))
          .map((p) => {
            return <Card p={p} />;
          })}
      </main>
    </div>
  );
}
export default Product;
