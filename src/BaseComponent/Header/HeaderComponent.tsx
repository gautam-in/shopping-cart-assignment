import "./HeaderComponent.scss";

import { ImagesConstantIndex } from "../../Utility/Images/ImagesConstantIndex";
import  CartComponent  from "../Cart/CartComponent";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../Utility/RouteUrlConstant";
import { setSelectedAccordion } from "../../Model/Model";

export const HeaderComponent: React.FC = () => {
    const BASE_CLASSNAME: string = "header";
    const NAVBAR_CLASSNAME: string = `${BASE_CLASSNAME}_navbar`;
    const LOGO_LINK_CLASSNAME: string = `${NAVBAR_CLASSNAME}_logo-link`;
    const LOGO_CLASSNAME: string = `${NAVBAR_CLASSNAME}_logo`;
    const HOME_CLASSNAME: string = `${NAVBAR_CLASSNAME}_home`;
    const PRODUCT_CLASSNAME: string = `${NAVBAR_CLASSNAME}_product`;

    const OPTION_CLASSNAME: string = `${NAVBAR_CLASSNAME}_option`;
    const SIGNIN_CLASSNAME: string = `${OPTION_CLASSNAME}_signin`;
    const REGISTER_CLASSNAME: string = `${OPTION_CLASSNAME}_register`;
    const CART_CLASSNAME: string = `${OPTION_CLASSNAME}_cart`;

    return (
        <header className={BASE_CLASSNAME}>
            <nav className={NAVBAR_CLASSNAME}>
                <Link
                    to={ROUTE_URL.DEFAULT_PAGE}
                    className={LOGO_LINK_CLASSNAME}
                >
                    <img
                        className={LOGO_CLASSNAME}
                        src={ImagesConstantIndex.LOGO}
                        alt="Sabka-Bazar-Logo"
                    />
                </Link>
                <Link to={ROUTE_URL.HOME_PAGE} className={HOME_CLASSNAME}>
                    Home
                </Link>
                <Link
                    to={ROUTE_URL.PRODUCT_PAGE}
                    className={PRODUCT_CLASSNAME}
                    onClick={() => setSelectedAccordion(null)}
                >
                    Product
                </Link>
                <div className={OPTION_CLASSNAME}>
                    <Link
                        to={ROUTE_URL.SIGNIN_PAGE}
                        className={SIGNIN_CLASSNAME}
                    >
                        Sign In
                    </Link>
                    <Link
                        to={ROUTE_URL.REGISTER_PAGE}
                        className={REGISTER_CLASSNAME}
                    >
                        Register
                    </Link>
                    <CartComponent className={CART_CLASSNAME} />
                </div>
            </nav>
        </header>
    );
};
