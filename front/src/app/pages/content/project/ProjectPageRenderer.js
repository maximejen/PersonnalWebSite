import React from 'react';
import PropTypes from 'prop-types';

import {translate} from "react-i18next";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";
import {getCorrectTranslatedString} from "../../../utils/functions";

import bulmaCarousel
    from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'

class ProjectPageRenderer extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        project: PropTypes.object
    };

    static defaultProps = {
        locale: 'en'
    };

    componentDidMount() {
        bulmaCarousel.attach();
    }

    render() {
        let imagesInProps = [];
        console.log(this.props.project.images);
        this.props.project.images.forEach(function (element, index) {
            imagesInProps.push(
                <div key={index} className="carousel-item has-background is-active">
                    <img className="is-background"
                         src={element.src}
                         alt={element.alt}
                         width="640"
                         height="310"
                    />
                </div>
            );
        });

        let githubLinkClass = 'tag is-';
        let testingLinkClass = 'tag is-';
        githubLinkClass += this.props.project.github_link !== undefined && this.props.project.github_link !== null ? 'success' : 'danger';
        testingLinkClass += this.props.project.testing_link !== undefined && this.props.project.testing_link !== null ? 'success' : 'danger';

        let technologiesInHTML = [];
        this.props.project.technologies.forEach(function (element, index) {
            technologiesInHTML.push(<div key={index} className="tag is-primary column is-2" style={{
                margin: "0.5em"
            }}
            >{element.name}</div>);
        });

        return (
            <div className={''}>
                <ScrollToTopOnMount/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                {this.props.project.name}
                            </h1>
                            <h2 className="subtitle">
                                {getCorrectTranslatedString(this.props.locale, this.props.project.description)}
                            </h2>
                        </div>
                    </div>
                </section>
                <div className={'columns is-3'} style={{padding: '3rem'}}>
                    <div className={'column is-5'}>
                        <div
                            className='carousel carousel-animated carousel-animate-slide'>
                            <div className='carousel-container'>
                                 {imagesInProps}
                            </div>
                            <div className="carousel-navigation is-overlay">
                                <div className="carousel-nav-left">
                                    <i className="fa fa-chevron-left"
                                       aria-hidden="true"/>
                                </div>
                                <div className="carousel-nav-right">
                                    <i className="fa fa-chevron-right"
                                       aria-hidden="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-divider-vertical is-1"/>
                    <div className={'column is-6'}>
                        <div className={'columns is-mobile is-centered'}>
                            <div className={'column centered'}>
                                <a className="tags has-addons" style={{margin: "0"}}
                                   href={this.props.project.github_link} target={'_blank'}>
                                    <span className="tag is-dark"><span
                                        className={'fab fa-github'}/></span>
                                    <span className={githubLinkClass}>Github</span>
                                </a>
                                <a className="tags has-addons" style={{margin: "1em"}}
                                   href={this.props.project.testing_link} target={'_blank'}>
                                    <span className="tag is-dark"><span
                                        className={'fas fa-flask'}/></span>
                                    <span className={testingLinkClass}>Experiment</span>
                                </a>
                            </div>
                        </div>
                        <h1 className={'title'}>
                            {this.props.t('body.project.description', {framework: "react-i18next"})}:
                        </h1>
                        <p>
                            {getCorrectTranslatedString(this.props.locale, this.props.project.complete_description)}
                        </p>
                    </div>
                    <script type="text/javascript"
                            src="/node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js"/>
                </div>
                <div className={'columns is-centered is-mobile'} style={{paddingBottom: '3rem'}}>
                    <h1 className={'title'}>
                        {this.props.t('body.project.technologies', {framework: "react-i18next"})}:
                    </h1>
                </div>
                <div className={'columns is-centered is-multiline'} style={{paddingBottom: '3rem'}}>
                    {technologiesInHTML}
                </div>
            </div>
        );
    }
}

export default translate('common')(ProjectPageRenderer);