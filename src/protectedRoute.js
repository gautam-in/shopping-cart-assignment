import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {

    const { loggedIn } = useSelector((state) => state);

    const location = {
        pathname: '/signin',
        state: { from: restOfProps['path'] }
    };

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                loggedIn ? <Component {...props} /> : <Redirect to={location} />
            }
        />
    );
}

export default ProtectedRoute;