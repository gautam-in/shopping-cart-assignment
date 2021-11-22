import { useState, useEffect } from "react";
import categoryData from "../../server/categories/index.get.json";
import "./sidenav.css";

const Sidenav = ({
  setCategoryID,
}) => {

  const [categoryList, setCategoryList] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showTab, setShowTab] = useState(false);

  useEffect(() => {
    categoryData && setCategoryList(categoryData);
  }, [])

  const renderedCatList = categoryList.map((category) => {
    const styleObj = {
      backgroundColor: categoryName === category.name ? "gray" : "",
      color: categoryName === category.name ? "white" : "",
    }
    return <nav
      key={category.id}
      className="nav-item"
      style={styleObj}
      onClick={() => {
        setCategoryID(category.id);
        setCategoryName(category.name);
        setShowTab(false);
      }}
    >
      {category.name}
    </nav>
  });

  return (
    <section className="sidebar">
      <nav className="dis-flex flex-coloumn hide-xs">{renderedCatList}</nav>
      <div className="mobile-tab">
        <p onClick={() => setShowTab(!showTab)}>
          {categoryName.length > 0 ? categoryName : "Select"}
          <span>&or;</span>
        </p>
        <div className={showTab ? "show-category" : "prod-category"}>
          {renderedCatList}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
