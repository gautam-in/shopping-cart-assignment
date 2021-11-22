import { useState } from "react";

import "./products.css";
import Card from "../../components/Card";
import Sidenav from "../../components/Sidenav";


const Products = () => {
  const [categoryID, setCategoryID] = useState("");

  return (
    <div className="dis-flex product-wrapper">
      <aside className="sidenav">
        <Sidenav
          setCategoryID={setCategoryID}
        />
      </aside>
      <main className="dis-flex flex-wrap pl-4 mt-4">
        <Card categoryID={categoryID} />
      </main>
    </div>
  );
};

export default Products;
