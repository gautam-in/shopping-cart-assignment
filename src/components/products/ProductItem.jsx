import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import { useMutation } from "react-query";
import { grey } from "@mui/material/colors";
import useTooltip from "hooks/useTooltip";
import { useAtom } from "jotai";
import { isEmpty } from "lodash";
import { productsInCartAtom, notificationAtom } from "utils/atoms";
import { addToCartApi } from "utils/services";
import { updateCartState } from "utils/support";

const ProductItem = ({ productsState }) => {
  const { getStr } = useTooltip();
  const [, setOpenSnackbar] = useAtom(notificationAtom);
  const [cartItem, saveIntoCart] = useAtom(productsInCartAtom);

  const addToCartMutation = useMutation(({ productId }) =>
    addToCartApi({ productId })
  );

  const onCartHandler = (product) => {
    if (!isEmpty(cartItem)) {
      // if cart has item present
      const found = cartItem.find((i) => i?.id === product?.id);
      if (!found) {
        saveIntoCart((prevState) => [
          ...prevState,
          { ...product, quantity: 1 },
        ]);
      } else {
        saveIntoCart(updateCartState(cartItem, product));
      }
    } else {
      // if cart doesn't has item
      saveIntoCart([{ ...product, quantity: 1 }]);
    }
    addToCartMutation.mutate({ productId: product?.id });
    setOpenSnackbar({ isOpen: true, message: "Product added to the cart" });
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "grid" },
        gridTemplateColumns: {
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        },
        gap: "0 1rem",
      }}
    >
      {productsState?.map((product) => (
        <Box key={product?.id}>
          <Paper variant="outlined" sx={{ padding: "1rem", margin: "1rem 0" }}>
            <Tooltip title={product?.name} placement="top">
              <Typography
                variant="h6"
                component="h6"
                my={1}
                sx={{ fontWeight: 600, minHeight: { md: "6rem" } }}
              >
                {getStr(product?.name, 70)}
              </Typography>
            </Tooltip>

            <Box sx={{ display: { xs: "flex", md: "block" }, gap: "1rem" }}>
              <Box sx={{ flex: 1, objectFit: "cover" }}>
                <img
                  src={product?.imageURL}
                  alt={product?.name}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Tooltip title={product?.description} placement="top">
                  <Typography
                    sx={{
                      background: grey[100],
                      padding: "1rem",
                      minHeight: { md: "10rem" },
                    }}
                  >
                    {getStr(product?.description, 150)}
                  </Typography>
                </Tooltip>
                <Button
                  variant="contained"
                  sx={{
                    margin: "1rem 0",
                    textTransform: "none",
                    width: "100%",
                  }}
                  onClick={() => onCartHandler(product)}
                >
                  Buy Now @ Rs.{product?.price}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default ProductItem;
