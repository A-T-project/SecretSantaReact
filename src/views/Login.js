import React from 'react';
import {Link} from "react-router-dom";

const login = () => {
    return (
        <div className="fullScreenLayout">
            <div className="col-md-4">
                <h1>
                    Vpiši se <i className='fas fa-user-shield'/>
                </h1>
                <form
                    method="post"
                    action="login"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Uporabniško Ime"
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Geslo"
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-outline-success btn-block"
                            type="submit"
                            value="Vpis"
                        />
                    </div>
                    <Link
                        to="/register"
                        className="btn btn-outline-danger btn-block"
                    >
                        Nisi registriran?
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default login;