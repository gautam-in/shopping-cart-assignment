import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/all";
import Card from "../UI/atoms/productList//card";
import "./index.scss";
import Aside from "../UI/atoms/productList/aside"
import AsideMobile from "../UI/atoms/productList/asideMobile"
import serviceWrapper from "../../serviceWrapper";

function Product({ categories }) {
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState(null);
  const history = useHistory();
  const [itemlist, setList] = useState([]);
  React.useEffect(() => {
    var url= "http://localhost:5000/products";
    serviceWrapper(url,setList);
    
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
          <IoMdArrowDropdown />
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
