import Link from "next/link";
import { connect } from "react-redux";
import NavStyles from '../styles/Nav'
function NavBar(props) {
    return (
        <NavStyles>
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
        </NavStyles>
    )
}

const mapStateToProps = state => {
    return { isLogIn: state.isLoggedIn }
}
export default connect(mapStateToProps)(NavBar)