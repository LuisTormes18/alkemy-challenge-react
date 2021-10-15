import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "./../../actions/auth";

export default function Navbar() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    
    return (
        


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div>
            <NavLink className='nav-link active' to='/' > My Team </ NavLink>

            <NavLink className='nav-link active' to='/heroes/search' > Search New</ NavLink>
    </div>
     <button
                    className="btn btn-dark"
                    type="submit"
                    onClick={handleLogout}
                >
                    Logout
                </button>
  </div>
</nav>
    );
}
