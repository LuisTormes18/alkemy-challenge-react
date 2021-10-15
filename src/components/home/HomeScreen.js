import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import {
    setSuperheroActive,
    loadMySuperheroesTeam,
    removeSuperheroFromTeam,
} from "../../actions/hero";

export default function HomeScreen() {
    const { heroTeam } = useSelector((state) => state.hero);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMySuperheroesTeam());
    }, [dispatch]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeSuperheroFromTeam(id));

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    const handleSeeDetails = (superhero) => {
        dispatch(setSuperheroActive(superhero));

        history.push("/heroes/details");
    };

    return (
        <div className="superhero-team">
            {heroTeam.length <= 0 ? (
                <h2 className="title mt-3">
                    Your team of heroes will appear here!
                </h2>
            ) : (
                <div className="container">
                    <h1 className="mt-3 title">My Team of Super heroes</h1>

                    <div className="container mt-2 grid-superhero">
                        {heroTeam.map((superhero) => (
                            <div key={superhero.id} className="card">
                                <img
                                    src={superhero.image.url}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {superhero.name}{" "}
                                        <span
                                            className={
                                                superhero.biography.alignment
                                            }
                                        >
                                            {superhero.biography.alignment}
                                        </span>
                                    </h5>
                                    <p>Power Stats</p>
                                    <ul>
                                        {Object.entries(
                                            superhero.powerstats
                                        ).map((powerstats) => (
                                            <li key={superhero.id}>
                                                <span>{powerstats[0]}</span>
                                                {powerstats[1]}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <button
                                        onClick={() => {
                                            handleDelete(superhero.id);
                                        }}
                                        className="btn btn-outline-dark"
                                    >
                                        Remove
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleSeeDetails(superhero);
                                        }}
                                        className="card-link ms-5"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
