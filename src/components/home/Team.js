import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { setSuperheroActive, removeFromTeam } from "../../actions/hero";

export default function Team() {
    const { heroTeam } = useSelector((state) => state.hero);
    const history = useHistory();
    const dispatch = useDispatch();

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
                dispatch(removeFromTeam(id));

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    const handleSeeDetails = (superhero) => {
        dispatch(setSuperheroActive(superhero));

        history.push("/home/hero/details");
    };
    return (
        <div className="superhero-team">
            <h1 className="mt-3 title">My Team de Superhero</h1>

            {heroTeam.length <= 0 ? (
                <h2>Your team of heroes will appear here!</h2>
            ) : (
                <div className="conateiner mt-2 grid-superhero">
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
                            </div>
                            <div className="card-body">
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
                                    className="card-link"
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
