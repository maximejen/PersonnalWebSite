import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next'

import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
    },
});

ReactDOM.render((
    <I18nextProvider i18n={i18next}>
        <Router>
            <App />
        </Router>
    </I18nextProvider>
), document.getElementById('root'));

registerServiceWorker();
