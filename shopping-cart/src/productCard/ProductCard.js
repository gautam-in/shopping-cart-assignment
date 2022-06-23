import { Grid, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../redux/actions";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(toggleCart(true, product)); //true for add and false for subtract
  };

  return (
    <Grid item xs={12} sm={6} md={3} sx={{ padding: 2 }}>
      <div className="productElement">
        <Grid item xs={12} md={12} sx={{}}>
          <p className="fixed-height-text">{product.name}</p>
        </Grid>
        <Grid item xs={12} md={12}>
          <img src={product.imageURL} alt="imgName" />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ backgroundColor: "#e9e9e9", padding: 0.5 }}
        >
          <Tooltip title={product.description}>
            <p className="fixed-height-text-desc">{product.description}</p>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{ justifyContent: "space-around", padding: 0.5 }}
        >
          <Grid item xs={12} md={6}>
            <p className="price-text">{`MRP Rs ${product.price}`}</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <button
              className="btn_primary max_width_button"
              onClick={() => handleAdd(product)}
            >
              Buy Now
            </button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default ProductCard;
