import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSuperheroActive, setSuperheroToTeam } from "../../actions/hero";

export default function CardSuperhero({ superhero }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const { name, image, biography } = superhero;

    const handleSeeDetails = () => {
        dispatch(setSuperheroActive(superhero));

        history.push("/home/hero/details");
    };
    const handleAddToTeam = () => {
        dispatch(setSuperheroToTeam(superhero));
    };
    return (
        <div className="card">
            <img src={image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                    <span className={biography.alignment}>
                        {biography.alignment}
                    </span>
                </h5>
            </div>
            <div className="card-body">
                <button
                    onClick={handleAddToTeam}
                    className="btn btn-outline-dark"
                >
                    Add to team
                </button>
                <button onClick={handleSeeDetails} className="card-link">
                    See Details
                </button>
            </div>
        </div>
    );
}
