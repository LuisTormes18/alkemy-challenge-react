import { types } from './../types/types';
import { isLogged } from './../helpers'
const initialState = {
    isAuthenticated: isLogged(),
    token: localStorage.getItem("token") || null,
    btnDisabled:false,
    msgError:null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
    	case types.login:
    	return{
    		isAuthenticated:true,
    		token:action.payload,
    		btnDisabled:false,
    		msgError:null
    	}
        case types.logout:
        return{
            ...initialState,
            isAuthenticated:false,
        }
    	case types.loginError:
    	return{
    		...state,
    		btnDisabled:false,
    		msgError:action.payload
    	}
    	case types.btnDisabled:
    	return{
    		...state,
    		btnDisabled:true
    	}
        default:
            return state;
    }
};

export default authReducer;
