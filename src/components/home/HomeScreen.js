import React from "react";
import { useSelector } from "react-redux";

import Navbar from './Navbar'
import Team from './Team'
const HomeScreen = () => {
    const { heroTeam } = useSelector(state=>state.hero);
    console.log(heroTeam);

    return (
        <div>
        	<Navbar />
            
            { heroTeam ? <Team /> : <h2>Aqui Aparecera tu equipo de heores!</h2> }

        </div>
    );
};

export default HomeScreen;
