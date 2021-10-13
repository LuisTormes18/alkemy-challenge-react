import { types } from "./../types/types";
export const startLogin = (values) => {
    return async (dispatch) => {
        dispatch(btnDisabled());

        const resp = await fetch("http://challenge-react.alkemy.org/", {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(values),
        });
        const result = await resp.json();

        if(!result.token){
            dispatch(loginError(result.error))
            return;
        }else{
            dispatch(login(result.token));
            localStorage.setItem('token',result.token);
            

        }

    };
};
const btnDisabled = ()=>{
    return{
        type:types.btnDisabled
    }
}
const loginError =(msg)=>{
return {
    type:types.loginError,
    payload:msg
}
}
const login = (token) => {
    return {
        type: types.login,
        payload: token,
    };
};
export const logout = () => {
    localStorage.removeItem("token");
    return {
        type: types.logout,
    };
};
