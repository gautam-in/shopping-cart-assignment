import Logo from "../../molecules/logo";
import Cart from "../../molecules/cart/index"
import NavBar from "../../molecules/NavBar";
import HeaderStyles from "./index.style";
import Link from 'next/link';

function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo />
                <NavBar />
            </div>
            <div className="sub-bar">
                <Link href="/signIn">Sign In</Link>
                <Link href="/signUp">Sign Up</Link>
                <Cart />
            </div>
        </HeaderStyles>
    )
}
export default Header;