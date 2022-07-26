import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams("login");
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 rounded alert-primary">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4 text-center">Register</h3>
                            <RegisterForm />
                            <p>
                                Already have account?{" "}
                                <a role="button" onClick={toggleFormType} className="text-violet-600 hover:text-violet-400">
                                    {" "}
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4 text-center">Login</h3>
                            <LoginForm />
                            <p>
                                Dont have account?{" "}
                                <a role="button" onClick={toggleFormType} className="text-violet-600 hover:text-violet-400">
                                    {" "}
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
