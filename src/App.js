import './App.css';
import React from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Home from './views/Home';
import RoomOptions from './views/RoomOptions';
import JoinRoom from './views/RoomJoin';
import CreateRoom from './views/RoomCreate';
import Rooms from './views/Rooms';
import Login from './views/Login';
import Register from './views/Register';
import Layout from './layout/Layout';
import './css/app.css';
import './css/bootstrap.min.css';
import './scripts/fontawesome.min';

function App() {
    return (
        <div className="main">
            <Layout/>
            <Switch>
                <Route
                    path="/" exact
                    component={Home}
                />
                <Route
                    path="/roomOption" exact
                    component={RoomOptions}
                />
                <Route
                    path="/roomJoin" exact
                    component={JoinRoom}
                />
                <Route
                    path="/roomCreate" exact
                    component={CreateRoom}
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
