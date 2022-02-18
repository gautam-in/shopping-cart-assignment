import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import "./category.styles.scss";
import { detectDevice } from "../../commonFunctions/detectDevice";

const Category = () => {
  const [data, setDataFn] = useState([]);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/products/${path}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        setDataFn(data);
      });
  }, []);

  const renderData = () => {
    const items = data.map((list, idx) => (
      <section className="category" key={idx}>
        {idx % 2 ? (
          <React.Fragment>
            <div className="category__right">
              <h1>{list.name}</h1>
              <span>{list.description}</span>
              <Button type="submit" handleClick={() => handleClick(list.key)}>
                <span
                  style={{ fontSize: detectDevice("mobile") ? "14px" : "16px" }}
                >{`Explore ${list.key}`}</span>
              </Button>
            </div>
            <img src={list.imageUrl} alt={`image ${list.name}`} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img src={list.imageUrl} alt={`image ${list.name}`} />
            <div className="category__right">
              <h1>{list.name}</h1>
              <span>{list.description}</span>
              <Button type="submit" handleClick={() => handleClick(list.key)}>
                <span
                  style={{ fontSize: detectDevice("mobile") ? "14px" : "16px" }}
                >{`Explore ${list.key}`}</span>
              </Button>
            </div>
          </React.Fragment>
        )}
      </section>
    ));

    return items;
  };

  return <article>{renderData()}</article>;
};

export default Category;
