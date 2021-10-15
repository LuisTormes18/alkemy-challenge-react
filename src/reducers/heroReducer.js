import { types } from "./../types/types";

const heroTeam = JSON.parse(localStorage.getItem("heroTeam")) || [];

const initialState = {
    heroTeam,
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
        case types.addToTeam:
            return {
                ...state,
                heroTeam:[...state.heroTeam, action.payload]
            };
         case types.removeFromTeam:
            return {
                ...initialState,
                heroTeam:action.payload,
            };
        case types.cleansuperheroList:
            return{
                ...state,
                superheroList:[]
            }
        default:
            return state;
    }
};
export default heroReducer;
