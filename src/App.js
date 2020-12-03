import './App.css';
import React from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Home from './views/Home';
import RoomOptions from './views/RoomOptions';
import RoomJoin from './views/RoomJoin';
import RoomCreate from './views/RoomCreate';
import Rooms from './views/Rooms';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './layout/Navbar';
import './css/app.css';
import './css/bootstrap.min.css';
import './scripts/fontawesome.min';

function App() {
    return (
        <div className="main">
            <Navbar/>
            <Switch>
                <Route
                    path="/" exact
                    component={Home}
                />
                <Route
                    path="/roomOptions" exact
                    component={RoomOptions}
                />
                <Route
                    path="/roomJoin" exact
                    component={RoomJoin}
                />
                <Route
                    path="/roomCreate" exact
                    component={RoomCreate}
                />
                <Route
                    path="/rooms" exact
                    component={Rooms}
                />
                <Route
                    path="/login" exact
                    component={Login}
                />
                <Route
                    path="/register" exact
                    component={Register}
                />
            </Switch>
        </div>
    );
}

export default withRouter(App);
