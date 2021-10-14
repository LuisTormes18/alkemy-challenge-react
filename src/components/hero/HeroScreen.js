import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeroScreen() {
    const { superheroActive } = useSelector((state) => state.hero);
    const { name, image, appearance, biography } = superheroActive;
	
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/"> Return </Link>
                </div>
            </nav>

            <div className="container hero-details">
                <div className="img">
                    <img src={image.url} alt={name} />

                    <div>
                        <button className="btn btn-outline-dark">
                            Add to team
                        </button>
                    </div>
                </div>

                <div className="details">
                    <h3>
                        {name} <span>{biography.alignment}</span>{" "}
                    </h3>

                    <ul>
                        <li>
                            <span>Fullname :</span> {biography["full-name"]}
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
        </>
    );
}
