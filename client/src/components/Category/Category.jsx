import React, { Fragment } from "react";
import "./category.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Category = ({ categoryData }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const categoryHandler = async (id) => {
    // props.history.push(`/products/${id}`);
    localStorage.setItem("categoryId", id);
    navigate(`/products`);
  };

  return (
    <Fragment>
      <Container>
        <div className={classes.root + " shadow bottom category_card"}>
          <Grid container>
            <Grid item xs={6}>
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
                      className="explore_btn"
                      onClick={() => categoryHandler(categoryData.id)}
                    >
                      Explore {categoryData.key}
                    </Button>
                  </div>
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              {categoryData.order % 2 !== 0 ? (
                <>
                  {" "}
                  <div className="categoryData">
                    <h4>{categoryData.name}</h4>
                    <p>{categoryData.description}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="explore_btn"
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
    </Fragment>
  );
};

export default Category;
