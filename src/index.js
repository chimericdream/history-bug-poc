import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import App from './app';

const appHistory = createHistory();

ReactDOM.render((
    <Router history={appHistory}><App /></Router>
), document.getElementById('root'));
