import { isEmpty, uniqBy } from "lodash";
import { useAtom } from "jotai";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { productsInCartAtom, togglerAtom } from "utils/atoms";
import { useEffect } from "react";
import { updateCartState } from "utils/support";
import { Link } from "react-router-dom";

const CartContent = () => {
  const theme = useTheme();
  const [toggler, setToggler] = useAtom(togglerAtom);
  const [cartItems, setCartItems] = useAtom(productsInCartAtom);

  const onAddQuntity = (product) => {
    if (product?.quantity < 30) {
      setCartItems(updateCartState(cartItems, product));
      setToggler((prevState) => !prevState);
    }
  };

  const onRemoveQuantity = (product) => {
    if (product?.quantity === 1) {
      const filteredData = cartItems.filter((i) => i.id !== product?.id);
      setCartItems(filteredData);
    }
    if (product?.quantity > 1) {
      setCartItems(updateCartState(cartItems, product, 0));
    }
    setToggler((prevState) => !prevState);
  };

  useEffect(() => {
    // effect just to re-render component
  }, [toggler]);

  if (!isEmpty(cartItems)) {
    return (
      <Box>
        {uniqBy(cartItems, "id")?.map((item) => (
          <Paper key={item.id} elevation={2}>
            <Box
              sx={{
                my: 2,
                p: 2,
                display: { xs: "block", sm: "flex" },
                flexWrap: "wrap",
                gap: "4rem",
                alignItems: "center",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <img src={item?.imageURL} alt={item?.name} height="120" />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ my: 2, fontWeight: 600 }}>
                  {item?.name}
                </Typography>
                <Box sx={{ display: "inline-flex", gap: "1.5rem" }}>
                  <Link
                    aria-label={`reduce quantity of ${item?.name} by one`}
                    onClick={() => onRemoveQuantity(item)}
                  >
                    <RemoveCircleIcon
                      sx={{
                        color: theme.palette.primary.main,
                        cursor: "pointer",
                      }}
                    />
                  </Link>

                  <Typography aria-describedby={`${item.quantity} quantity`}>
                    {item.quantity}
                  </Typography>
                  <Link
                    aria-label={`increase quantity of ${item?.name} by one`}
                    onClick={() => onAddQuntity(item)}
                  >
                    <AddCircleIcon
                      sx={{
                        color: theme.palette.primary.main,
                        cursor: "pointer",
                      }}
                    />
                  </Link>

                  <CloseIcon />
                  <Typography sx={{ fontWeight: 500 }}>
                    Rs. {item.price}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{ fontWeight: 600 }}
                aria-label={item?.quantity * item?.price}
              >
                Rs. {item?.quantity * item?.price}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "100%",
        gap: "1rem",
        marginTop: "5rem",
        // width: { xs: "320px", sm: "360px", md: "450px" },
      }}
    >
      <Typography variant="h5">No items in your cart</Typography>
      <Typography variant="body1">
        Your favorite items are just a click away
      </Typography>
    </Box>
  );
};

export default CartContent;
