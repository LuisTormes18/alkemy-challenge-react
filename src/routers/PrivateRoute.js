import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {!isAuthenticated ? <Redirect to="/auth/login" /> : <Component />}
        </Route>
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
