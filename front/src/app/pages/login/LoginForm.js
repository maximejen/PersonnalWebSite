import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {translate} from "react-i18next";

import {server_ip} from "../../../App";

const sha512 = require('sha512');

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirect: false,
            error: false,
            errorMessage: ""
        };
    }

    static propTypes = {
        updateUser: PropTypes.func
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const url = "http://" + server_ip + ":4000/login";
        let hash = sha512(this.state.password);
        const data = JSON.stringify({
            email: this.state.email,
            password: hash.toString('hex').toUpperCase()
        });
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: data
        })
            .catch(err => {
                this.setState({
                    error: err
                });
            })
            .then(response => {
                response.json()
                    .then(data => {
                        if (response.status === 401) {
                            this.setState({
                                errorMessage: data.message
                            })
                        } else {
                            this.props.updateUser(data);
                            if (data !== undefined)
                                this.setState({
                                    logged: true
                                })
                        }
                    });
            });
    };

    render() {
        let width = "18em";
        if (this.state.logged) {
            return <Redirect to={"/admin"}/>;
        }
        let classicClass = "is-full input";
        let errorClass = "is-full input is-danger";
        let errorMessage = this.state.errorMessage !== "" ?
            <p className="help is-danger">{this.props.t('login.'+(this.state.errorMessage.replace(" ", "_")), {framework: "react-i18next"})}</p> : "";
        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <form action={"http://" + server_ip + ":4000/login"} method={"POST"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            {this.props.t('login.email', {framework: "react-i18next"})}
                        </label>
                        <input
                            id={"email"}
                            name={"email"}
                            className={this.state.errorMessage === "incorrect email" ? errorClass : classicClass}
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{
                                width: width
                            }}
                        />
                        {this.state.errorMessage === "incorrect email" ? errorMessage : ""}
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            {this.props.t('login.password', {framework: "react-i18next"})}
                        </label>
                        <input
                            id={"password"}
                            name={"password"}
                            className={this.state.errorMessage === "incorrect password" ? errorClass : classicClass}
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            style={{
                                width: width
                            }}/>
                        {this.state.errorMessage === "incorrect password" ? errorMessage : ""}
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                        </label>
                        <button
                            name={"submit"}
                            className={"is-primary button"}
                            disabled={!this.validateForm()}
                            type="submit"
                            style={{
                                width: '100%'
                            }}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default translate('common')(LoginForm);