import React from 'react';
import { Provider } from 'react-redux';

import App from './app'
import configureStore from '../configureStore';

const store = configureStore({ "app": { } });

const Wrapped = () =>
    <Provider store={store}>
        <App />
    </Provider>;

export default Wrapped;
