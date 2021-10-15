import axios from "axios";

import { types } from "./../types/types";

export const startLogin = (values) => {
    return async (dispatch) => {
        dispatch(btnDisabled());

        try {
            const resp = await axios({
                method: "POST",
                url: "http://challenge-react.alkemy.org/",
                data: values,
            });

            const result = resp.data;

            dispatch(login(result.token));
            localStorage.setItem("token", result.token);
        } catch (err) {
            dispatch(btnDisabled());

            dispatch(loginError("username or password incorrect"));
        }
    };
};
const btnDisabled = () => {
    return {
        type: types.btnDisabled,
    };
};
const loginError = (msg) => {
    return {
        type: types.loginError,
        payload: msg,
    };
};
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
