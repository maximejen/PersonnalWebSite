import React from 'react';
import PropTypes from 'prop-types';

import {translate} from "react-i18next";
import gql from "graphql-tag";
import ErrorMessage from "./content/error/ErrorMessage";
import ProjectPageRenderer from "./content/project/ProjectPageRenderer";
import {Query} from "react-apollo";

const GET_PROJECT = gql`
    query Project($id: ID!){
        project(id: $id) {
            name
            description {
                ...descriptionLanguages
            }
            complete_description {
                ...descriptionLanguages
            }
            technologies {
                ...technologyElements
            }
            images {
                src
                alt
            }
            github_link
            testing_link
        }
    }

    fragment descriptionLanguages on TranslatedString {
        fr
        en
    }
    fragment technologyElements on Technology {
        id
        name
        type {
            id
            name {
                fr
                en
            }
        }
    }
`;

class ProjectPage extends React.Component {
    static propTypes = {
        locale: PropTypes.string
    };

    static defaultProps = {
        locale: "en"
    };

    render() {
        console.log("PROPS", this.props);
        return (
            <Query query={GET_PROJECT} variables={{id: this.props.match.params.id}}>
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
                    return <ProjectPageRenderer project={data.project} locale={this.props.locale}/>;
                }}
            </Query>
        );
    }
}

export default translate('common')(ProjectPage);