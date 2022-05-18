import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <Link className="logo-container" to='/'>
                logo here
            </Link>
            <div className="nav-links__container">
                <Link className="nav-link" to='/home'>Home</Link>
                <Link className="nav-link" to='/products'>Products</Link>
                <Link className="nav-link" to='/sign-in'>Sign In</Link>
                <Link className="nav-link" to='/register'>Register</Link>
            </div>
            <Outlet/>
        </div>
    );
}

export default Navigation;