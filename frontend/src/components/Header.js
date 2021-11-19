import { HeaderStyles } from "./styles/headerStyles";
import Nav from "./Nav";

export default function Header() {
  return (
    <HeaderStyles>
      <img src="static/images/logo_2x.png" alt="Sabka Bazar" className="logo" />
      <Nav />
    </HeaderStyles>
  );
}
