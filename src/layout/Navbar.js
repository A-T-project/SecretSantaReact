import React from 'react';
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                        >
                            <i className="fas fa-home"/> Domov
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/rooms"
                        >
                            <i className="far fa-list"/> Moje sobe
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/roomOption"
                        >
                            <i className="fal fa-plus-square"/> Nova soba
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            to='/logout'
                        >
                            <i className="fas fa-sign-out-alt"/> Izpis
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className='nav-link'
                            to='/login'
                        >
                            <i className="fas fa-user-shield"/> Vpis
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className="nav-link"
                            to='/register'
                        >
                            <i className="fa-user-plus"/> Registracija
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;