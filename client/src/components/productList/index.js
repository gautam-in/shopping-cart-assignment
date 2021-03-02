import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Card from "./lib/card";
import "./index.scss";

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
      checkAdult(hash[1]);
      history.push("products");
      setCat(hash[1]);
    }
  }, []);

  console.log(history.location.hash);

  function checkAdult(category) {
    setCat(category);
  }
  return (
    <div className="productContainer">
      <div className="sidebar">
        {categories
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((p) => {
            return (
              <button
                style={{
                  backgroundColor: cat === p.id ? "lightgray" : "transparent",
                }}
                onClick={() => checkAdult(p.id)}
              >
                {p.name}
              </button>
            );
          })}
      </div>

      <div className="catIcon">
        <span onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu />
        </span>
      </div>
      {menu && (
        <div className="sidebarMobile">
          {categories
            .sort(function (a, b) {
              return a.order - b.order;
            })
            .map((p, i) => {
              // return <div onClick={() => setType(p.id)}>{p.name}</div>})
              return (
                <div
                  style={{
                    backgroundColor: cat === p.id ? "lightgray" : "transparent",
                  }}
                  onClick={() => {
                    checkAdult(p.id);
                    setMenu(false);
                  }}
                >
                  {p.name}
                </div>
              );
            })}
        </div>
      )}

      <div className="mainContainer">
        {itemlist
          .filter((item) => (cat == null ? true : item.category === cat))
          .map((p) => {
            //   return p.category === type ?
            //   <Card p={p} />
            //     // console.log(p.name);)

            //    :null
            // })}

            return <Card p={p} />;
          })}
      </div>
    </div>
  );
}
export default Product;
