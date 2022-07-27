import s from "./App.module.css";
import React from "react";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import Header from "./components/header/header";
import Content from "./components/pages/main/content";

const App = () => {
    return (
        <div className={`${s.App} font-sans`}>
            <Header />
            <Switch>
                <ProtectedRoute path="/" exact component={Content} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
