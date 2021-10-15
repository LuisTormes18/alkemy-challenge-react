import axios from "axios";

import { types } from "./../types/types";
import {
    addSuperheroToTeamLocalStorage,
    removeSuperheroFromTeamLocalStorage,
    showError,
    validateIfAHeroCanBeAdded,
} from "./../helpers";

const base_url = process.env.REACT_APP_SUPERHERO_API_BASE_URL;
const token = process.env.REACT_APP_TOKEN;

export const startSearchSuperheroByName = (name) => {
    return async (dispatch) => {
        const resp = await fetch(
            `${base_url}/${token}/search/${name}`
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

        if (validateIfAHeroCanBeAdded(heroTeam, superhero)) {
            addSuperheroToTeamLocalStorage([...heroTeam, superhero]);
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

export const removeSuperheroFromTeam = (id) => {
    return (dispatch, getState) => {
        const { heroTeam } = getState().hero;

        const newTeam = heroTeam.filter((superhero) => superhero.id !== id);
        removeSuperheroFromTeamLocalStorage(newTeam);
        dispatch(removeFromTeam(newTeam));
    };
};
const removeFromTeam = (newTeam) => {
    return { 
        type: types.removeFromTeam, 
        payload: newTeam 
    };
};
export const clearSuperheroList = () => {
    return {
        type: types.clearsuperheroList,
    };
};
