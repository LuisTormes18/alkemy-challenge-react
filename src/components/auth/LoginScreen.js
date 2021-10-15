import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validator from "validator";

import { startLogin } from "./../../actions/auth";

const LoginScreen = () => {
    const { btnDisabled, msgError } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <div className="login-screen form-container">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(values) => {
                    const errors = {};

                    if (!validator.isEmail(values.email)) {
                        errors.email = "The Email not is Valid";
                    }
                    if (values.password === "") {
                        errors.password = "The Password is required";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(startLogin(values));
                }}
            >
                {({ errors }) => (
                    <Form className="form">
                        <div className="form-group">
                            <label className="mt-3">Email</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="jhon123@gmail.com"
                                className="form-control mt-3"
                            />
                            <ErrorMessage
                                name="email"
                                component={() => (
                                    <div className="text-error">
                                        {errors.email}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="form-group">
                            <label className="mt-3">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control mt-3"
                            />
                            <ErrorMessage
                                name="password"
                                component={() => (
                                    <div className="text-error">
                                        {errors.password}
                                    </div>
                                )}
                            />
                        </div>
                        {msgError && (
                            <div className="alert alert-danger mt-3">
                                {msgError}
                            </div>
                        )}
                        <div className="form-group mt-3">
                            <input
                                disabled={btnDisabled}
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginScreen;
