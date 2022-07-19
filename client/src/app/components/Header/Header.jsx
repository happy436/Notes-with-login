import s from "./Header.module.css";
import React from "react";

const Header = (props) => {
    return (
        <div className={s.header}>
            <h2 className={s.title}>Hello user!{/* {user.name} */}</h2>
        </div>
    );
};

export default Header;
