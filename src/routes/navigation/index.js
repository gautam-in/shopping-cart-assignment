import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import {signOutUser} from "../../utils/firebase";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <div className="navigation">
            <Link className="logo-container" to='/'>
                logo here
            </Link>
            <div className="nav-links__container">
                <Link className="nav-link" to='/home'>Home</Link>
                <Link className="nav-link" to='/products'>Products</Link>
                {currentUser ? (<span className="nav-link" onClick={signOutUser}> Sign Out</span>)
            : (
                <Fragment>
                    <Link className="nav-link" to='/sign-in'>Sign In</Link>
                    <Link className="nav-link" to='/register'>Register</Link>
                </Fragment>
            )}
            </div>
            <Outlet/>
        </div>
    );
}

export default Navigation;