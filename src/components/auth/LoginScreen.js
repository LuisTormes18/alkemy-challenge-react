import React from "react";

import useForm from "./../../hooks/useForm";

function LoginScreen() {
    const [stateValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = stateValues;

    function handleSubmit(e) {
        e.preventDefault();
    }
// login url = http://challenge-react.alkemy.org/
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <input
                        // disabled={btnDisabled}
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                    />
                </div>

                {/* {msgError && (
                    <div className="alert alert-danger" role="alert">
                        {msgError}
                    </div>
                )} */}
            </form>
        </div>
    );
}

export default LoginScreen;
