import s from "./Header.module.css";
import React, { useEffect } from "react";
import Button from "../common/buttons/button";
import LogOut from "../common/buttons/logOut";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, getIsLoggedIn, getUsersList } from "../../store/users";

const Header = (props) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const userData = useSelector(getUsersList());
    console.log(userData);
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getCurrentUser());
        }
    }, [isLoggedIn]);
    return (
        <header className={s.header}>
            <h2 className={s.title}>Hello {isLoggedIn && userData ? userData.name : "User"}!</h2>
            {isLoggedIn ? (
                <Button className="absolute right-5 top-5">
                    <Link to="/logout">
                        <LogOut />
                    </Link>
                </Button>
            ) : null}
        </header>
    );
};

export default Header;
