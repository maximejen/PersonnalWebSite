import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'

// Apollo Configuration for Wrapping
import { ApolloProvider } from 'react-apollo';

import ApolloClient from "apollo-boost";
import i18n from "i18next";

const client = new ApolloClient({
    uri: "http://back:4000/"
});

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            i18n: i18n,
            locale: i18n.language,
            user: undefined,
            isConnected: false
        };

        this.changeLocale = this.changeLocale.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(newUser) {
        sessionStorage.setItem("userToken", newUser ? newUser.token : null);
        sessionStorage.setItem("userName", newUser ? newUser.name : null);
        sessionStorage.setItem("userId", newUser ? newUser.id : null);
        sessionStorage.setItem("userEmail", newUser ? newUser.email : null);
        this.setState({
            user: newUser,
            isConnected: !!newUser
        });
    }

    static propTypes = {
        children: PropTypes.func
    };

    changeLocale(newLocale) {
        this.setState({locale: newLocale});
    }

    componentDidMount() {
        if (sessionStorage.getItem("userToken") !== undefined && sessionStorage.getItem("userToken") !== "null") {
            this.setState({
                user: {
                    Token: sessionStorage.getItem("userToken"),
                    Name: sessionStorage.getItem("userName"),
                    Id: sessionStorage.getItem("userId"),
                    Email: sessionStorage.getItem("userEmail")
                },
                isConnected: sessionStorage.getItem("userToken") !== null
            });
        } else {
            this.setState({
                user: undefined,
                isConnected: false
            })
        }
    }

    render() {
        return <ApolloProvider client={client}>
            <Site>
                <Helmet
                    title="Maxime JENNY"
                    meta={[
                        {
                            name: 'description',
                            content: 'Maxime JENNY\'s personnal website'
                        },
                        {
                            name: 'keywords',
                            content: 'resume, blog, porfolio, tutorials, maxime jenny'
                        },
                    ]}
                    script={[
                        {'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
                    ]}
                    link={[
                        {
                            'rel': 'stylesheet',
                            'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
                        }
                    ]}
                />
                <Header onChangeLocale={this.changeLocale}/>
                <Content>
                    <Router isConnected={this.state.isConnected} updateUser={this.updateUser}/>
                </Content>
                <Footer/>
            </Site>
        </ApolloProvider>
    }
}

export default Layout