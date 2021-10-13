import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PublicRoute({ Authenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {Authenticated ? <Redirect to="/" /> : <Component />}
        </Route>
    );
}

PublicRoute.propTypes = {
    Authenticated: PropTypes.bool,
};

export default PublicRoute;
