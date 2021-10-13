const initialState = {
    Authenticated: false,
    token: localStorage.getItem("token") || null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default authReducer;
