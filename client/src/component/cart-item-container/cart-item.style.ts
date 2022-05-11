import { SxProps } from "@mui/material"

export const mainContainer: SxProps = { display: "flex", alignItems: "center", mt: 2, bgcolor: "white" ,

}

export const itemName: SxProps = { fontSize: "1rem", color: "black", fontWeight: "bolder" }

export const iconBox: SxProps = {
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  mt: 1,
}

export const iconBtn: SxProps = { bgcolor: "#ba2955", width: "25px", height: "25px" }

export const qtyText: SxProps = {
  fontSize: ".9rem",
  color: "black",
  fontWeight: "bold",
  pr: 1,
  pl: 1,
  width: "10px",
  textAlign: "center",
}

export const iconStyle: SxProps = { color: "white" }

export const itemPriceStyle: SxProps = {
  fontSize: ".9rem",
  color: "black",
  fontWeight: "bold",
  pr: 1,
  pl: 2,
  width: "50px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
}

export const totalPriceBoxStyle: SxProps = { height: "100%"}

export const totalPriceStyle: SxProps = {
  fontSize: ".9rem",
  color: "black",
  fontWeight: "bold",
  pr: 1,
  pl: 1,
  width: "10px",
  textAlign: "center",
}
