import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './styles/sass/_index.sass';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render( <App/>, MOUNT_NODE);
