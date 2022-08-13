import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Router } from "react-router-dom";
import { createStore } from "./app/store/createStore";
import history from "./app/utils/history";
import App from "./app/App";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const store = createStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <h1 className="hidden">Note app</h1>
                <App />
            </Router>
            <ToastContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
