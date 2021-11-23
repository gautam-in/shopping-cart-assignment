import { HeaderStyles, HeaderWrap } from "./styles/headerStyles";
import Nav from "./Nav";

export default function Header() {
  return (
    <HeaderStyles>
      <HeaderWrap>
        <img src="static/images/logo_2x.png" alt="Sabka Bazar" className="logo" />
        <Nav />
      </HeaderWrap>
    </HeaderStyles>
  );
}
