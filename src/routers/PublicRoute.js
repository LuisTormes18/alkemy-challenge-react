import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PublicRoute({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {isAuthenticated ? <Redirect to="/" /> : <Component />}
        </Route>
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
};

export default PublicRoute;
