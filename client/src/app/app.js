import s from "./app.module.css";
import React from "react";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import ProtectedRoute from "./components/common/protectedRoute";
import Content from "./components/pages/main/content";
import Note from "./components/pages/editPage/editNote";
import NoteProvider from "./hook/useNote";

const App = () => {
    return (
        <div className={`${s.App} font-sans`}>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={LogOut} />
                <NoteProvider>
                    <ProtectedRoute path="/" exact component={Content} />
                    <ProtectedRoute path="/note/:noteId?" component={Note} />
                </NoteProvider>
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
