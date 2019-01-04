import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import {getCorrectTranslatedString, truncateOnWord} from "../../../utils/functions";

class ProjectCard extends React.Component {

	static propTypes = {
	    project: PropTypes.object,
        locale: PropTypes.string
	};

	render() {
	    let descr = this.props.project.description;
	    let complete_descr = this.props.project.description;

        let technologiesInHTML = [];
        this.props.project.technologies.forEach(function (element, index) {
            technologiesInHTML.push(<div key={index} className="tag is-primary column is-2" style={{
                marginLeft: "0.5em",
                marginRight: "0.5em"
            }}
            >{element.name}</div>);
        });

		return (
            <NavLink className="is-one-third column project-card" to={"/projects/" + this.props.project.id}>
                <div className={"card-image"}>
                    <figure className={"image is-4by3"}>
                        <img src={this.props.project.images[0].src} alt={this.props.project.images[0].alt}/>
                    </figure>
                </div>
                <div className={"card-content"}>
                    <div className={"media"}>
                        <div className={"media-content"}>
                            <p className={"title is-3"}>
                                {this.props.project.name}
                            </p>
                            <p className={"subtitle is-5"}>{ getCorrectTranslatedString(this.props.locale, descr) }</p>
                        </div>
                    </div>
                    <div className={"content"}>
                        <p className={"subtitle is-6"}>
                        { truncateOnWord(getCorrectTranslatedString(this.props.locale, complete_descr), 200) }
                        </p>
                        <div className={'columns'}>
                            {technologiesInHTML}
                        </div>
                    </div>
                </div>
            </NavLink>
		);
	}
}

export default ProjectCard