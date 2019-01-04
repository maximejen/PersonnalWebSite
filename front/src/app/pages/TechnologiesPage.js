import React from 'react'

import PropTypes from "prop-types";
import {translate} from "react-i18next";

class TechnologiesPage extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        numberCards: PropTypes.number
    };

    static defaultProps = {
        numberCards: 0
    };

    render() {
        return <div className={'projects-content'}>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.props.t('body.technology.title', {framework: "react-i18next"})}
                        </h1>
                        <h2 className="subtitle">
                            {this.props.t('body.technology.subtitle', {framework: "react-i18next"})}
                        </h2>
                    </div>
                </div>
            </section>
            <div className={"columns is-multiline project-columns"}>
                {/* Prop that render a list of Progress Bars for any technologies */}
            </div>
        </div>;
    }
}

export default translate('common')(TechnologiesPage);