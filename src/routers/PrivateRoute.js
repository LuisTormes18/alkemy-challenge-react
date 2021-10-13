import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ Authenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {!Authenticated ? <Redirect to="auth/login" /> : <Component />}
        </Route>
    );
}

PrivateRoute.propTypes = {
    Authenticated: PropTypes.bool,
};

export default PrivateRoute;
