import { SxProps } from "@mui/material";

export const MainBox = (bool: Boolean): SxProps => {
  return {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexDirection: `${bool && "row-reverse"}`,
  };
};

export const ImageBox: SxProps = { width: "25%", p: 2 };

export const ADBox: SxProps = { width: "85%", p: "5%" }

export const ADTitle = { fontSize: "1.2rem", fontWeight: "700", p: 1 }

export const ADDescription = { fontSize: "0.8rem", color: "black", pb: 1 }

export const textColor: SxProps = { color: "white" }

export const btnText: SxProps = {
  [`.MuiTypography-root`]: {
    fontSize: "0.8rem",
  },
}