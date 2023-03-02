/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { isEmpty } from "lodash";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  isCartDialogOpenAtom,
  productsInCartAtom,
  togglerAtom,
  totalPriceAtom,
} from "utils/atoms";
import { grey } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CartContent from "./CartContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        backgroundColor: grey[800],
        color: "#fff",
        fontWeight: 600,
        letterSpacing: "0.5px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[100],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CartDialog() {
  const [open, setOpen] = useAtom(isCartDialogOpenAtom);
  const [cartItems] = useAtom(productsInCartAtom);
  const [toggler] = useAtom(togglerAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!isEmpty(cartItems) && cartItems?.length === 1) {
      const total = cartItems?.reduce((acc, curr) => {
        return acc?.quantity * acc?.price + curr?.quantity * curr?.price;
      });
      const calc = total?.quantity * total?.price;
      setTotalPrice(calc);
    }
    if (!isEmpty(cartItems) && cartItems?.length > 1) {
      const total = cartItems?.reduce((acc, curr) => {
        return acc?.quantity * acc?.price + curr?.quantity * curr?.price;
      });
      setTotalPrice(total);
    }
    if(isEmpty(cartItems)) setTotalPrice(0)
  }, [toggler]);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ minHeight: "60vh" }}
      maxWidth="md"
      fullWidth
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        My Cart ({cartItems ? cartItems?.length : 0} item)
      </BootstrapDialogTitle>
      <DialogContent dividers sx={{ minHeight: "70vh", background: "#f8f8f8" }}>
        <CartContent />
      </DialogContent>
      <DialogActions sx={{ display: "block" }}>
        <Typography sx={{ color: grey[800], mb: 2, textAlign: "center" }}>
          Promo code can be applied on payment page{" "}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 2,
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: "1px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
          autoFocus
          onClick={handleClose}
        >
          Proceed to Checkout
          <span style={{ display: "flex", alignItems: "center" }}>
            Rs. {totalPrice} <ChevronRightIcon />
          </span>
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
