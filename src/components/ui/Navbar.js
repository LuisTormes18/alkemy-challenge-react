import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "./../../actions/auth";
import { cleanTeam } from "./../../actions/hero";

export default function Navbar() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(cleanTeam());
        dispatch(logout());
    };

    return (
        <header>
            <nav>
                <NavLink className="nav-link active" to="/">
                    My Team
                </NavLink>

                <NavLink className="nav-link active" to="/heroes/search">
                    Search New
                </NavLink>
            </nav>
            <button
                className="btn btn-dark"
                type="submit"
                onClick={handleLogout}
            >
                Logout
            </button>
        </header>
    );
}
