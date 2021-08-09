import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";

const BaseDefaultButton = withStyles((theme) => ({
  root: {
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    boxSizing: "border-box",
    borderRadius: 4,
 
  },
}))(ButtonBase);


export const BaseButton = (props) => {
  const {
    children,
    color,
    borderRadius,
    borderColor,
    backgroundColor,
    onClick,
    height,
    width,
  } = props;

 
  return (
    <React.Fragment>
      <BaseDefaultButton
        style={{
          color: color,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          height: height,
          width: width,
        }}
        onClick={onClick}

      >
        {children}
      </BaseDefaultButton>
    </React.Fragment>
  );
};

export const ButtonWithText = (props) => {
  const {
    dispText,
    color,
    borderColor,
    onClick,
    height,
    width,
    backgroundColor,
    fontSize,
    fontWeight,
    borderRadius,
  } = props;
  return (
    <React.Fragment>
      <BaseButton
        color={color}
        borderColor={borderColor}
        height={height}
        width={width}
        onClick={onClick}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            padding: "4px 10px",
            fontSize: fontSize ? fontSize : 12,
            fontWeight: fontWeight ? fontWeight : 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {dispText}
        </div>
      </BaseButton>
    </React.Fragment>
  );
};
