import { types } from "./../types/types";

export const startSearchSuperheroByName = (name) => {

    return async (dispatch) => {
        const resp = await fetch(
            `https://superheroapi.com/api.php/${2666859856949429}/search/${name}`
        );
        
        const superhero = await resp.json();

        if(superhero.error){

            alert(superhero.error);
            return
        }

        
        dispatch(setSuperheroList(superhero.results));
    };
};

const setSuperheroList = (superheroList) => {
    return {
        type: types.loadsuperheroList,
        payload: superheroList,
    };
};

export const setSuperheroActive = (active) => {
    return {
        type: types.setSuperheroActive,
        payload: active,
    };
};

export const addToTeam = (superhero) => {

    const team = JSON.parse(localStorage.getItem("heroTeam"));
    team.push(superhero);
    localStorage.setItem("heroTeam", JSON.stringify(team));
    
    return {
        type: types.addToTeam,
        payload: superhero,
    };
};

export const removeFromTeam = (id) => {

    const newTeam = JSON.parse(localStorage.getItem("heroTeam"))
    .filter(superhero=> (superhero.id !== id) );


    console.log(newTeam);

    localStorage.setItem("heroTeam", JSON.stringify(newTeam));
    
    return {
        type: types.removeFromTeam,
        payload: newTeam,
    };
};