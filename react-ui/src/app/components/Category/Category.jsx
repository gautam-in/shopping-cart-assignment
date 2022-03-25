import React from "react";
import "./category.scss";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";

const Category = ({ categoryData }) => {
  const navigate = useNavigate();
  const categoryHandler = (id) => {
    localStorage.setItem("categoryId", id);
    navigate(`/products`, { state: { categoryId: id } });
  };

  return (
    <>
      <Container>
        <div className={"shadow bottom category_card"}>
          <Grid container>
            <Grid item xs={6} className="mobile-flex">
              {categoryData.order % 2 !== 0 ? (
                <>
                  <div>
                    <img
                      src={categoryData.imageUrl}
                      alt={categoryData.key}
                      style={{ width: "50%" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="categoryData">
                    <h4>{categoryData.name}</h4>
                    <p>{categoryData.description}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="explore-btn"
                      onClick={() => categoryHandler(categoryData.id)}
                    >
                      Explore {categoryData.key}
                    </Button>
                  </div>
                </>
              )}
            </Grid>
            <Grid item xs={6} className="mobile-flex">
              {categoryData.order % 2 !== 0 ? (
                <>
                  <div className="categoryData">
                    <h4>{categoryData.name}</h4>
                    <p>{categoryData.description}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="explore-btn"
                      onClick={() => categoryHandler(categoryData.id)}
                    >
                      Explore {categoryData.key}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={categoryData.imageUrl}
                    alt={categoryData.key}
                    style={{ width: "50%", float: "right" }}
                  />
                </>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Category;
