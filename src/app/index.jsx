import React from 'react';
import { Provider } from 'react-redux';

import App from './app'
import configureStore from '../configureStore';

const store = configureStore({ "app": { } });

const AppWrapper = () =>
    <Provider store={store}>
        <App />
    </Provider>;

export default AppWrapper;
