import React from 'react'
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom'
import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";

import '../../styles/App.css';

import { translate } from 'react-i18next';
import i18n from 'i18next';
import NavSocialMediaHub from "./header/NavSocialMediaHub";
import NavLanguagePickerHub from "./header/NavLanguagePickerHub";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBurgerMode: false,
            i18n: i18n,
            locale: i18n.language
        };

        this.handleChangeLocale = this.handleChangeLocale.bind(this);
    }

    static propTypes = {
        onChangeLocale: PropTypes.func
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
        }));
    };

    handleChangeLocale(newLocale) {
        this.props.onChangeLocale(newLocale);
        this.state.i18n.changeLanguage(newLocale);
        this.setState(prevState => ({
            locale: newLocale
        }));
        this.props.onChangeLocale(newLocale);
    };

    render() {
        return (
            <nav className="navbar is-dark is-fixed-top is-transparent"
                 aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink
                        className="navbar-item"
                        to="/">
                        <img
                            style={{
                                borderTopLeftRadius: '50%',
                                borderTopRightRadius: '50%',
                                borderBottomLeftRadius: '50%',
                                borderBottomRightRadius: '50%',
                                marginRight: 15
                            }}
                            src="/logo.svg"
                            width="50px"
                            alt="{Maxime JENNY.}"
                        />
                    </NavLink>
                    <NavBurger onClick={this.toggleNav} isActive={this.state.isBurgerMode}/>
                </div>
                <div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start" style={{margin: "0px"}}>
                        <NavItem redirectTo={"/projects"} text={ this.props.t('nav.projects', { framework: "react-i18next" }) } iconClass={"fas fa-code"}/>
                    </div>
                    <div className="navbar-start">
                        <NavItem redirectTo={"/admin"} text={"Admin"} iconClass={"fas fa-cogs"}/>
                    </div>
                    <div className="navbar-end">
                        <NavSocialMediaHub isActive={this.state.isBurgerMode}/>
                        <NavLanguagePickerHub actualLocale={this.state.locale} onClick={this.handleChangeLocale} isBurgerMode={this.state.isBurgerMode}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default translate('common')(Header);