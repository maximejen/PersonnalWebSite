import React from 'react';
import BodySocialMedia from "./BodySocialMedia";

class BodySocialMediaHub extends React.Component {
    render() {
        return (
            <div className={"centered"}>
                <BodySocialMedia href={"https://www.github.com/maximejen"} color={'#FFFFFF'} target={'_blank'} iconName={"github"}/>
                <BodySocialMedia href={"https://www.twitter.com/maxime_jenny/"} color={'#FFFFFF'} target={'_blank'} iconName={"twitter"}/>
                <BodySocialMedia href={"https://www.linkedin.com/in/maxime-jenny/"} color={'#FFFFFF'} target={'_blank'} iconName={"linkedin"}/>
            </div>
        );
    }
}

export default BodySocialMediaHub