import React from 'react';
import {Link} from "react-router-dom";

const roomJoin = () => {
    return (
        <div className="fullScreenLayout">
            <div className="col-md-4">
                <h1>
                    Pridruži se sobi
                </h1>
                <form
                    method="post"
                    action="roomJoin"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Šifra sobe"
                            name="roomUrl"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Geslo"
                            name="roomPassword"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-outline-success btn-lg"
                            type="submit"
                            value="Pridruži se sobi"
                        />
                        <Link
                            to="/roomOption"
                            className="btn btn-outline-danger button btn-lg float-right"
                        >
                            Nazaj
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default roomJoin;