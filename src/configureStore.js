import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { original } from 'immer';
import { fromJS } from 'immutable';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

export default (initialState) => {

    const epicMiddleware = createEpicMiddleware();

    const middlewares = [epicMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
        : compose;

    const store = createStore(
        rootReducer,
        fromJS(initialState),
        composeEnhancers(...enhancers),
    );

    epicMiddleware.run(rootEpic);

    if (module.hot) {

        module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
    }

    return store;
};
