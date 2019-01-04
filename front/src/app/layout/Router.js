import React from 'react'
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'
import i18n from "i18next";
import AppAdmin from "../pages/AppAdmin";
import ProjectPage from "../pages/ProjectPage";
import Login from "../pages/Login";

class Router extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool,
        updateUser: PropTypes.func
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        return <Switch>
            <Route exact path='/' render={() => {
                return <Home locale={i18n.language}/>;
            }}/>
            <Route exact path='/projects' render={() => {
                return <ProjectsPage locale={i18n.language}/>;
            }}/>
            <Route exact path='/projects/:id' render={(props) => {
                return <ProjectPage match={props.match} locale={i18n.language}/>;
            }}/>
            <Route exact path='/admin' render={() => {
                return <AppAdmin isConnected={this.props.isConnected}/>;
            }}/>
            <Route exact path='/login' render={() => {
                return <Login isConnected={this.props.isConnected} updateUser={this.props.updateUser} locale={i18n.language}/>;
            }}/>
        </Switch>
    }
};

export default Router