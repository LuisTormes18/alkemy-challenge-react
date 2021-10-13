import { types } from './../types/types';

const initialState = {
	heroTeam:localStorage.getItem('heroTeam') || null,
	heroActive:null,
	heroList:[]
}

const heroReducer = (state=initialState, action)=> {
	switch(action.type){

		case types.loadSquad:

		return{
			...state,
			heroTeam:action.payload
		}

		default:
            return state;
    
	}
}
export default heroReducer;