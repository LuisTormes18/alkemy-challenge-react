import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSuperheroActive } from "../../actions/hero";

export default function CardSuperhero({ superhero }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id, name, image } = superhero;

    const handleSeeDetails = () => {
        dispatch(setSuperheroActive(superhero));

        history.push("/home/hero/details");
    };
    return (
        <div className="card">
            <img src={image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
                <button className="btn btn-outline-dark">Add to team</button>
                <button onClick={handleSeeDetails} className="card-link">
                    See Details
                </button>
            </div>
        </div>
    );
}