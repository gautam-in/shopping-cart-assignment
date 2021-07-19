import { ButtonBase } from "./styled";

export default function Button({ children, ...restprops }) {
  return <ButtonBase {...restprops}>{children}</ButtonBase>;
}
