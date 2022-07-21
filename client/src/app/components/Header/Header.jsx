import s from "./Header.module.css";
import React from "react";
import Button from "../common/buttons/button";
import LogOut from "../common/buttons/logOut";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const Header = (props) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <header className={s.header}>
            <h2 className={s.title}>Hello user!{/* {user.name} */}</h2>
            {isLoggedIn ? (
                <Button className="absolute right-5 top-5">
                    <LogOut />
                </Button>
            ) : null}
        </header>
    );
};

export default Header;
