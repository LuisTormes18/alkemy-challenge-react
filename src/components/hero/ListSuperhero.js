import React from "react";
import { useSelector } from "react-redux";

import CardSuperhero from "./CardSuperhero";

export default function ListSuperhero() {
    const { superheroList } = useSelector((state) => state.hero);
    return (
        <div className="grid-superhero">
            {superheroList.map((superhero) => (
                <CardSuperhero key={superhero.id} superhero={superhero} />
            ))}
        </div>
    );
}
