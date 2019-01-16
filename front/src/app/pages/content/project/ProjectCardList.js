import React from 'react';
import PropTypes from 'prop-types';
import {Query} from "react-apollo";
import gql from "graphql-tag";

import ProjectCard from "./ProjectCard";

import ErrorMessage from "../error/ErrorMessage";

const GET_PROJECTS = gql`
    query {
        projects {
            id
            name
            description {
                fr
                en
            }
            complete_description {
                fr
                en
            }
            technologies {
                name
            }
            images {
                src
                alt
            }
        }
    }
`;

class ProjectCardList extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        numberCards: PropTypes.number
    };

    static defaultProps = {
        locale: 'en',
        numberCards: 3
    };

    render() {
        let rendered = 0;

        return (
            <Query query={GET_PROJECTS}>
                {({loading, error, data}) => {
                    if (loading)
                        return (
                            <div className={'column is-12 has-text-centered'}>
                                <img src={'/loader.gif'} alt={"loading..."}/>
                            </div>
                        );
                    if (error) {
                        return <ErrorMessage
                            errorMessage={error.message}
                            errorTitle={'Fetch Error'}
                        />;
                    }
                    return (data.projects.map((project) => {
                        if (rendered < this.props.numberCards || this.props.numberCards === 0) {
                            rendered += 1;
                            return <ProjectCard key={rendered}
                                                project={project}
                                                locale={this.props.locale}/>
                        }
                        return false;
                    }));
                }}
            </Query>
        );
    }
}

export default ProjectCardList