import { fromJS } from 'immutable';

import {
    SHOW_BANNER,
    HIDE_BANNER,
    SET_TRANSLATION,
    SET_TAB
} from '../constants';

import { initialState } from './initialState';

export default (state = fromJS(initialState), { type, payload }) => {

    switch (type) {

        case SHOW_BANNER:

            return state.set('bannerInfo', payload);

        case HIDE_BANNER:

            return state.set('bannerInfo', null);

        case SET_TRANSLATION:

            return state.set('translation', payload);

        case SET_TAB:

            return state.set('active-tab', payload);

        default:

            return state;
    }
};
