import React from 'react'
import PropTypes from 'prop-types';

import {translate} from "react-i18next";
import BodySocialMediaHub from "./content/home/BodySocialMediaHub";
import ProjectsPage from "./ProjectsPage";

class Home extends React.Component {
    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        return <div className={'home-content'}>
            <div className={"bgimg"}
                 style={{background: 'linear-gradient(to bottom, #000000AA 40%, #f09646AA 200%) center, url("/star_nebula.jpg")'}}>
                <div className={"has-text-centered content-home-page"}>
                    <h1 className="home-title">{'{Maxime JENNY.}'}</h1>
                    <div>
                        <hr className="home-line"/>
                        <p className="home-desc subtitle">
                            {this.props.t('body.main-description', {framework: "react-i18next"})}
                        </p>
                        <BodySocialMediaHub/>
                    </div>
                </div>
            </div>

            <ProjectsPage numberCards={3} locale={this.props.locale}/>
        </div>;
    }
}

export default translate('common')(Home);