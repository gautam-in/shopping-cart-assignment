import { createTheme } from "@mui/material/styles";
// import { Typography } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Dosis",
    ].join(",")
  },
  breakpoints: {
    values: {
    //   xxs: 100, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
}
});