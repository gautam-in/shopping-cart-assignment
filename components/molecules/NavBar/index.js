import NavStyles from "./index.style";
import Link from 'next/link';
function NavBar(props) {
    return (
        <NavStyles>
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
        </NavStyles>
    )
}
export default NavBar;