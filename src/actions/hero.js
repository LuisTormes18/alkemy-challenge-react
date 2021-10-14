import axios from 'axios';

import { types } from "./../types/types";
import {
    addSupeheroToTeamLocalStorage,
    removeSupeheroFromTeamLocalStorage,
    showError,
    validateIfAHeroCanBeAdded,
} from "./../helpers";

export const startSearchSuperheroByName = (name) => {
    return async (dispatch) => {
        const resp = await fetch(
            `https://superheroapi.com/api.php/${2666859856949429}/search/${name}`
        );

        const superhero = await resp.json();

        if (superhero.error) {
            showError(superhero.error);
            return;
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

export const setSuperheroToTeam = (superhero) => {
    return (dispatch, getState) => {

    	
        const { heroTeam } = getState().hero;

        if (validateIfAHeroCanBeAdded(heroTeam,superhero)) {
            addSupeheroToTeamLocalStorage([...heroTeam, superhero]);
            dispatch(addToTeam(superhero));
        }
    };
};

const addToTeam = (superhero) => {
    return {
        type: types.addToTeam,
        payload: superhero,
    };
};

export const removeFromTeam = (id) => {
    const newTeam = removeSupeheroFromTeamLocalStorage(id);

    return {
        type: types.removeFromTeam,
        payload: newTeam,
    };
};

export const  clearSuperheroList = ()=>{
return{
    type:types.clearsuperheroList
}
}