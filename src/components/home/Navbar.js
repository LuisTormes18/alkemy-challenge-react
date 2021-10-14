import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "./../../actions/auth";
import useForm from "./../../hooks/useForm";
import { startSearchSuperheroByName,  clearSuperheroList } from "./../../actions/hero";

export default function Navbar() {
    const [stateValues, handleInputChange, reset] = useForm({ search: "" });

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());
    };
      const handleGoToMyTeam = () => {

        dispatch(clearSuperheroList());
        history.push('/');

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (stateValues.search === "") {
            return;
        }

        dispatch(startSearchSuperheroByName(stateValues.search));
        reset();
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <button onClick={handleGoToMyTeam} className='nav-link active' > My Team </ button>

                <form className="d-flex" onSubmit={handleSubmit}>

                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search "
                        aria-label="Search"
                        name="search"
                        value={stateValues.search}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-dark" type="submit">
                        Search
                    </button>
                </form>
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
