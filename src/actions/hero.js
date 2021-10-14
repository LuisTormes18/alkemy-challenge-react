import { types } from "./../types/types";

export const startSearchSuperheroByName = (name) => {
    console.log(process.env);

    return async (dispatch) => {
        const resp = await fetch(
            `https://superheroapi.com/api.php/${2666859856949429}/search/${name}`
        );

        const superhero = await resp.json();

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

export const addToTeam = () => {};
