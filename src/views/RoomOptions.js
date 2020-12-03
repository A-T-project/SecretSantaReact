import React from 'react';
import {Link} from "react-router-dom";

const roomOptions = () => {
    return (
        <div className="fullScreenLayout">
            <div>
                <h1>
                    Izberi sobo
                </h1>
                <div>
                    <Link
                        to="/roomJoin"
                        className="btn btn-outline-info btn-lg btn-block"
                    >
                        Pridruži se sobi <i className="fas fa-sign-in-alt room"/>
                    </Link>
                </div>
                <div className="pt-2">
                    <Link
                        to="/roomCreate"
                        className="btn btn-outline-info btn-lg btn-block"
                    >
                        Naredi sobo <i className="fas fa-sign-in-alt room"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default roomOptions;