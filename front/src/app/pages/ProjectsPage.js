import React from 'react'

import ProjectCardList from "./content/project/ProjectCardList";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import ScrollToTopOnMount from "./content/utils/ScrollToTopOnMount";

class ProjectsPage extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        numberCards: PropTypes.number
    };

    static defaultProps = {
        numberCards: 0
    };

    render() {
        return <div className={'projects-content'}>
            <ScrollToTopOnMount/>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.props.t('body.project.title', {framework: "react-i18next"})}
                        </h1>
                        <h2 className="subtitle">
                            {this.props.t('body.project.subtitle', {framework: "react-i18next"})}
                        </h2>
                    </div>
                </div>
            </section>
            <div className={"columns is-multiline project-columns"}>
                <ProjectCardList locale={this.props.locale} numberCards={this.props.numberCards}/>
            </div>
        </div>;
    }
}

export default translate('common')(ProjectsPage);