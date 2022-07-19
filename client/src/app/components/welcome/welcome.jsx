import React from "react";
import { Link } from "react-router-dom";

function Welcome(props) {
    return (
        <div className="card text-center offset-md-3 shadow rounded alert-primary">
            <div className="card-body">
                <h5 className="card-title">Welcome</h5>
                <p className="card-text">Welcome to the Note App</p>
                <span className="container d-flex gap-3">
                    <Link className="btn btn-primary" to="/login">
                        Sign in
                    </Link>
                    <Link className="btn btn-primary" to="/login/register">
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Welcome;
