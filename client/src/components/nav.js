import { NavLink } from "react-router-dom";
import { NavStyles } from "../styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </NavStyles>
  );
}
