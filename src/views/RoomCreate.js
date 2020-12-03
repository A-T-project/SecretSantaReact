import React from 'react';
import {Link} from "react-router-dom";

const roomCreate = () => {
    return (
        <div className="fullScreenLayout">
            <div className="col-md-4">
                <h1>
                    Generiraj sobo
                </h1>
                <form
                    method="post"
                    action="roomCreate"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ime sobe"
                            name="roomName"
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
                            value="Generiraj sobo"
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

export default roomCreate;