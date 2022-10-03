import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Categories.module.scss";
import CopyRights from "../copyRights/CopyRights";
import { useNavigate } from "react-router-dom";
import useHttp from "../customHook/useHttp";
const Categories = () => {
  document.title = "Home";
  const navigate = useNavigate();
  const [homeCategories, setCaterories] = useState();
  const { sendHttpRequest } = useHttp();
 
  useEffect(() => {
    sendHttpRequest({
      url: "http://localhost:5000/categories",
    }).then((response) =>
      setCaterories(() =>
        response.data
          .sort((a, b) => a.order - b.order)
          .filter((item) => item.name !== "Seafood")
      )
    );
  }, [sendHttpRequest]);
  return (
    <>
      <div className={styles.wrapperCategories}>
        {homeCategories && homeCategories.lenght !== 0
          ? homeCategories.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div  tabIndex="0" key={index}>
                    <div className={styles.categ}>
                      <div className={styles.cateImage}>
                        <img src={item.imageUrl.replace(".png",".webp")} alt="catImage" />
                      </div>

                      <div className={styles.cateContent}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Button
                          className="custom_bg"
                          onClick={() => navigate("/Products")}
                          onKeyPress={() => navigate("/Products")}
                        >
                          Explore {item.key}
                        </Button>
                      </div>
                    </div>

                    {index === homeCategories.length - 1 ? (
                      ""
                    ) : (
                      <div className={styles.one_edge_shadow}>&nbsp;</div>
                    )}
                  </div>
                );
              } else {
                return (
                  <div  tabIndex="0" key={index}>
                    <div className={styles.categ}>
                      <div className={styles.cateContent}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Button
                          className="custom_bg"
                          onClick={() => navigate("/Products")}
                          onKeyPress={() => navigate("/Products")}
                        >
                          Explore {item.key}
                        </Button>
                      </div>
                      <div className={styles.cateImage}>
                        <img src={item.imageUrl.replace(".png",".webp")} alt="catImage" />
                      </div>
                    </div>

                    {index === homeCategories.length - 1 ? (
                      ""
                    ) : (
                      <div className={styles.one_edge_shadow}>&nbsp;</div>
                    )}
                  </div>
                );
              }
            })
          : "No Data to Show"}
      </div>
      <CopyRights />
    </>
  );
};

export default Categories;
