import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import DropDown from "../dropdown/dropdown.component";
import ProductCard from "../ProductCard/product-card.component";
import SideBar from "../sideBar/side-bar.component";
import "./productListing.styles.scss";
import { fetchCategoryData } from "../../actions";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ProductListing = ({ productData }) => {
  const [defaultSelected, setDefaultSelected] = useState(true);
  let { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const categoryData = useSelector((state) => {
    return state.categories.categoryData;
  });

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);

  const handleCategoryChange = (id) => {
    if (productId === id || id === "Default") {
      history.push(`/PLP`);
      setDefaultSelected(true);
    } else {
      history.push(`/PLP/${id}`);
    }
  };

  const handleDropDownChange = (e) => {
    const id = e.target.value;
    if (productId === id || id === "Default") {
      history.push(`/PLP`);
      setDefaultSelected(true);
    } else {
      history.push(`/PLP/${id}`);
    }
  };

  const productClickHandler = async (product) => {
    const headers = {
      "Content-Type": "text/plain",
    };
    const data = await axios({
      url: `http://localhost:5000/addToCart`,
      method: "post",
      data: {
        id: product.id,
      },
      headers: headers,
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err));
    if (data.response === "Success") {
    }
  };

  return (
    <div>
      <div className="product_listing">
        <SideBar
          id={productId}
          name="select"
          handleCategoryChange={handleCategoryChange}
        ></SideBar>
        <div className="category_dropdown">
          <DropDown
            categoryData={categoryData}
            productId={productId}
            defaultSelected={defaultSelected}
            handleDropDownChange={handleDropDownChange}
          ></DropDown>
        </div>
        <div className="category__description">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              productClickHandler={productClickHandler}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductListing);
