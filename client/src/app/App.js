import s from "./App.module.css";
import React from "react";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Content from "./components/pages/main/Content";
import Welcome from "./components/pages/welcome";

const App = () => {
    return (
        <div className={`${s.App} font-sans`}>
            <AppLoader>
                <Header />
                <Switch>
                    <ProtectedRoute
                        path="/main/:userId?/:edit?"
                        component={Content}
                    />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" exact component={Welcome} />
                    <Redirect to="/" />
                </Switch>
                <ToastContainer />
            </AppLoader>
        </div>
    );
};

export default App;
