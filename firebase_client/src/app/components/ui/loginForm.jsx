import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useHistory } from "react-router-dom";
import { getAuthErrors, logIn } from "../../store/users";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxField from "./../common/form/checkBoxField";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const logInError = useSelector(getAuthErrors());
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/main";
        dispatch(logIn({ payload: data, redirect }));
        if (logInError) {
            toast.error(logInError, { autoClose: 2000 });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Stay on
            </CheckBoxField>
            <button
                className="btn bg-violet-400 hover:bg-violet-700 w-100 mx-auto"
                type="submit"
                disabled={!isValid}
            >
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
