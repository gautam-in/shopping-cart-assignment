import React, { ReactElement } from "react";
import classNames from "classnames";
import "./button.scss";
export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Disabled = "disabled"
}

interface IProps {
  type: ButtonType;
  id: string;
  onClick?: Function;
  customClass?: string;
  disabled?: boolean;
  loading?: boolean;
  children: any;
  loadText?: string;
  btnTyp?: "submit" | "button" | "reset";
}
export default function Button(props: IProps): ReactElement {
  const { type, disabled = false, onClick = null, customClass, id, loadText, loading = false, children, btnTyp = "button" } = props;
  const className = classNames("btn", type, customClass);
  return (
    <button
      id={id}
      className={className}
      disabled={disabled}
      type={btnTyp}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {loading ? loadText : children}
    </button>
  );
}
