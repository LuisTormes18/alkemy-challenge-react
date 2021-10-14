import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import Team from "./Team";
import ListSuperhero from "./../hero/ListSuperhero";

const HomeScreen = () => {
    const { superheroList } = useSelector((state) => state.hero);

    console.log("superheroList", superheroList.length);

    return (
        <div>
            <Navbar />
            {superheroList.length <= 0 ? <Team /> : <ListSuperhero />}
        </div>
    );
};

export default HomeScreen;
