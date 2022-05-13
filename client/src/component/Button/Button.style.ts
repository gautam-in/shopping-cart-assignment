import { SxProps } from "@mui/material";

export const btnStyle: SxProps = {
  bgcolor: "#ba2955",
  ".MuiButton-contained": {
    "&::after": {
      bgcolor: "#ba2955",
    },
  },
  [`.MuiTypography-root`]: {
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "600",

  },

  "&:hover": {
    background: "#e8618a",
  },
  '&.CCButton-icon-only':{
    borderRadius:'80%',
    width:'1px'

  }
};
