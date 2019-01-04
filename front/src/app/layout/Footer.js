import React from 'react'

import { translate } from 'react-i18next';
import FooterSocialMedia from "./footer/FooterSocialMedia";

class Footer extends React.Component {
    render() {
        return <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                    Copyright <span className={"far fa-copyright"}></span> Maxime JENNY&nbsp;-&nbsp;{ this.props.t('footer.madein', { framework: "react-i18next" }) }&nbsp;<a href={'https://reactjs.org'}>ReactJS</a>
                    </p>
                    <div className={"footer-social-hub"}>
                        <FooterSocialMedia href={"https://www.github.com/maximejen"} color={'#292929'} target={'_blank'} iconName={"github"}/>
                        <FooterSocialMedia href={"https://www.twitter.com/maxime_jenny/"} color={'#0084FF'} target={'_blank'} iconName={"twitter"}/>
                        <FooterSocialMedia href={"https://www.linkedin.com/in/maxime-jenny/"} color={'#0077B5'} target={'_blank'} iconName={"linkedin"}/>
                    </div>
                </div>
            </div>
        </footer>
    }
}

export default translate('common')(Footer);