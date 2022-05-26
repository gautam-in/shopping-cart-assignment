import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import './container.scss';
import Navigation from "../../components/navigation";
const Container = () => {

    return (
        <Fragment>
            <Navigation/>
            <div className="wrapper">
                <Outlet/>
            </div>
            <div className="footer">
                    Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.
            </div>
        </Fragment>
    );
}

export default Container;