import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid, IconButton } from "@mui/material";

import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",

  top: { xs: 0, sm: 0, md: "56%" },
  left: { xs: 0, sm: 0, md: "80%" },
  transform: { xs: 0, sm: 0, md: "translate(-50%, -50%)" },
  width: { xs: "100%", sm: "100%", md: 450 },
  minHeight: "100vh",
  bgcolor: "#d4d2d2",
  boxShadow: 24,
};

const Cart = ({ handleClose, handleOpen, open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);

  const handleUpdate = (update, product) => {
    //true for add and false for subtract
    if (update) {
      dispatch(toggleCart(true, product));
    } else {
      dispatch(toggleCart(false, product));
    }
  };

  let totalAmount = 0;
  let totalItems = 0;

  if (cartData && cartData.length > 0) {
    cartData.forEach((item) => {
      totalAmount += item.buffer * item.price;
      totalItems += item.buffer;
    });
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // disableAutoFocus={true}
      >
        <Box sx={style}>
          <Box
            sx={{
              height: 70,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="cartFontColor">My cart</p>
              <p className="cartCountFont">{`[${totalItems} ${
                totalItems > 1 ? "items" : "item"
              }]`}</p>
            </div>
            <IconButton onClick={handleClose}>
              <ClearIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          {totalItems ? (
            <>
              {" "}
              <Box sx={{ height: 500, width: "auto", overflow: "scroll" }}>
                {cartData ? (
                  cartData.map((item) => (
                    <Grid
                      key={item.id}
                      container
                      className="cartCountNum"
                      sx={{
                        padding: 2,
                        backgroundColor: "white",
                        marginTop: 2,
                      }}
                    >
                      <Grid
                        container
                        item
                        alignItems="center"
                        xs={3}
                        md={3}
                        className="cartItemImage"
                      >
                        <img alt="item.jpg" src={item.imageURL} />
                      </Grid>

                      <Grid container item xs={9} md={9} alignItems="center">
                        <Grid item md={12}>
                          <p className="cartItemName">{item.name}</p>
                        </Grid>

                        <Grid container item xs={12} md={12}>
                          <Grid
                            container
                            item
                            justifyContent="start"
                            alignItems="center"
                            xs={8}
                            md={8}
                          >
                            <Grid sx={{ px: 1 }}>
                              <button
                                className="circularButton"
                                onClick={() => {
                                  handleUpdate(false, item);
                                }}
                              >
                                -
                              </button>
                            </Grid>
                            <Grid>
                              <p>{item.buffer} </p>
                            </Grid>
                            <Grid sx={{ px: 1 }}>
                              <button
                                className="circularButton"
                                onClick={() => {
                                  handleUpdate(true, item);
                                }}
                              >
                                +
                              </button>
                            </Grid>
                            <Grid sx={{ px: 1 }}>
                              <p>X </p>
                            </Grid>
                            <Grid>
                              <p>{item.price}</p>
                            </Grid>
                          </Grid>

                          <Grid
                            container
                            item
                            justifyContent="end"
                            alignItems="center"
                            xs={4}
                            md={4}
                          >
                            <p>{item.buffer * item.price}</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                ) : (
                  <></>
                )}
              </Box>
              <Box sx={{ padding: 1, backgroundColor: "white", margin: 2 }}>
                <Grid container>
                  <Grid container item xs={4}>
                    <img
                      alt="adImg.jpg"
                      src="/static/images/lowest-price.png"
                    />
                  </Grid>

                  <Grid xs={8} item sx={{ paddingLeft: 1 }}>
                    <p className="adText">You won't find it cheaper anywhere</p>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: { xs: 120, sm: 150, md: 200 },
                  width: "100%",
                  position: "absolute",
                  bottom: "0%",
                }}
              >
                <Grid item>
                  <Grid container justifyContent="center" alignItems="center">
                    <p style={{ margin: 5 }}>
                      Promo code can be applied on payment page{" "}
                    </p>
                  </Grid>
                  <Box sx={{ margin: 2 }}>
                    <Grid container justifyContent="center" alignItems="center">
                      <button
                        onClick={() => {
                          handleClose();
                        }}
                        className="btn_primary max_width_button buy_button"
                      >
                        <p>Proceed to checkout</p> <p>{`Rs.${totalAmount}`}</p>
                      </button>
                    </Grid>
                  </Box>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              <div className="flexColumn">
                <div className="topView">
                  <div>
                    <div className="topView ">
                      <p className="boldText">No items in your cart</p>
                    </div>
                    <div className="topView">
                      <p>Your favourite are just a click away</p>
                    </div>
                  </div>
                </div>
                <div className="bottomView">
                  <Grid item>
                    <Box sx={{ margin: 2 }}>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <button
                          className="btn_primary max_width_button start_shopping_button"
                          onClick={() => {
                            handleClose();
                            navigate("/products");
                          }}
                        >
                          <p>Start Shopping</p>
                        </button>
                      </Grid>
                    </Box>
                  </Grid>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
