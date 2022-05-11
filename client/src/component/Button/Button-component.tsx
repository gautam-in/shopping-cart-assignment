import { Button as MUIButton, SxProps, Typography, ButtonProps } from "@mui/material";
import { SystemStyleObject, Theme } from "@mui/system";
import { btnStyle } from "./Button.style";
import clsx from "clsx";

export interface ButtonType extends ButtonProps {
  title?: string;
  icon?: string;
}

const Button = (props: ButtonType) => {
  const { title, icon, type } = props;
  const ButtonStyles: SxProps<Theme> = (theme) => {
    const style = btnStyle;

    return { ...style, ...props.sx } as SystemStyleObject;
  };
  return (
    <MUIButton
      className={clsx({
        "CCButton-icon-only": !title && icon,
        "CCButton-title-icon": title && icon,
      })}
      variant="contained"
      sx={ButtonStyles}
      onClick={props.onClick}
      type={type}
    >
      {props.title && <Typography>{props.title}</Typography>}
      {props.children}
    </MUIButton>
  );
};

export default Button;
