import React from 'react';
import LoginForm from "./login/LoginForm";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    state = {
        isConnected: this.props.isConnected
    };

    static propTypes = {
        updateUser: PropTypes.func,
        isConnected: PropTypes.bool,
        locale: PropTypes.string
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        if (this.state.isConnected === true) {
            return <Redirect to={"/admin"}/>;
        }
        return (
            <div style={{
                background: 'linear-gradient(to bottom, #000000AA 40%, #f09646AA 200%) center, url("/star_nebula.jpg")',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh"
            }}>
                <LoginForm updateUser={this.props.updateUser} locale={this.props.locale}/>
            </div>
        );
    }
}

export default Login