import { types } from "./../types/types";

const initialState = {
    heroTeam: localStorage.getItem("heroTeam") || null,
    superheroActive: null,
    superheroList: [],
};

const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadTeam:
            return {
                ...state,
                heroTeam: action.payload,
            };
        case types.loadsuperheroList:
            return {
                ...state,
                superheroList: action.payload,
            };
        case types.setSuperheroActive:
            return {
                ...state,
                superheroActive: action.payload,
            };
        default:
            return state;
    }
};
export default heroReducer;
