import s from "./header.module.css";
import React, { useEffect } from "react";
import Button from "../common/button";
import LogOut from "../common/icon/logOut";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, getIsLoggedIn, getUsersList } from "../../store/users";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const userData = useSelector(getUsersList());
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getCurrentUser());
        }
    }, [isLoggedIn]);
    return (
        <header className={s.header}>
            <h2 className={s.title}>Hello {userData ? userData.name : "User"}!</h2>
            {isLoggedIn && (
                <Button className="absolute right-5 top-5">
                    <Link to="/logout">
                        <LogOut />
                    </Link>
                </Button>
            )}
        </header>
    );
};

export default Header;
