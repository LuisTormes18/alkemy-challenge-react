import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSuperheroToTeam } from "../../actions/hero";

export default function SuperheroDetailsScreen() {
    const dispatch = useDispatch();

    const { superheroActive } = useSelector((state) => state.hero);
    const { name, image, appearance, biography } = superheroActive;

    const handleAddToTeam = () => {
        dispatch(setSuperheroToTeam(superheroActive));
    };
    return (
        <div className="container superhero-details">
            <div className="img">
                <img src={image.url} alt={name} />

                <div>
                    <button
                        onClick={handleAddToTeam}
                        className="btn btn-outline-dark mt-3"
                    >
                        Add to team
                    </button>
                </div>
            </div>

            <div className="details">
                <h3>
                    {name}{" "}
                    <span className={biography.alignment}>
                        {biography.alignment}
                    </span>
                </h3>

                <ul>
                    <li>
                        <span>Full Name :</span> {biography["full-name"]}
                    </li>
                    <li>
                        <span>Weight :</span> {appearance.weight[1]}
                    </li>
                    <li>
                        <span>Height :</span> {appearance.height[1]}
                    </li>
                    <li>
                        <span>Eye color :</span> {appearance["eye-color"]}
                    </li>
                    <li>
                        <span>Hair color :</span> {appearance["hair-color"]}
                    </li>
                    <li>
                        <span>Aliases :</span> {biography.aliases}
                    </li>
                </ul>
            </div>
        </div>
    );
}
