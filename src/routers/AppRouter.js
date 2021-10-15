import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import HomeScreen from "./../components/home/HomeScreen";
import Navbar from "./../components/ui/Navbar";

import SuperheroDetailsScreen from "./../components/hero/SuperheroDetailsScreen";
import SearchSuperheroesScreen from "./../components/hero/SearchSuperheroesScreen";
import LoginScreen from "../components/auth/LoginScreen";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute
                        path="/auth/login"
                        component={LoginScreen}
                        isAuthenticated={isAuthenticated}
                    />
                    <div>
                        <Navbar />
                        <Switch>
                            <PrivateRoute
                                path="/heroes/details"
                                component={SuperheroDetailsScreen}
                                isAuthenticated={isAuthenticated}
                            />
                            <PrivateRoute
                                path="/heroes/search"
                                component={SearchSuperheroesScreen}
                                isAuthenticated={isAuthenticated}
                            />
                            <PrivateRoute
                                path="/"
                                component={HomeScreen}
                                isAuthenticated={isAuthenticated}
                            />
                        </Switch>
                    </div>

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
