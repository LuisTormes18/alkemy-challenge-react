import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import HomeScreen from "./../components/home/HomeScreen";
import LoginScreen from "../components/auth/LoginScreen";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
    const Authenticated = false;
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute
                        exact
                        path="auth/login"
                        component={LoginScreen}
                        Authenticated={Authenticated}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={HomeScreen}
                        Authenticated={Authenticated}
                    />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
