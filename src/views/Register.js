import React from 'react';
import {Link} from "react-router-dom";

const register = () => {
    return (
        <div className="fullScreenLayout">
            <div className="col-md-4">
                <h1>
                    Registriraj se <i className='fas fa-user-plus'/>
                </h1>
                <form
                    method="post"
                    action="register"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ime"
                            name="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Uporabniško Ime"
                            name="username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Geslo"
                            name="password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-outline-success btn-block"
                            type="submit"
                            value="Registracija"
                        />
                    </div>
                    <Link
                        to="/login"
                        className="btn btn-outline-danger btn-block"
                    >
                        Že registriran?
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default register;