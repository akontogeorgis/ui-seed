import { fromJS } from 'immutable';

import {
    SHOW_BANNER,
    HIDE_BANNER,
    SET_TRANSLATION,
    SET_TAB
} from '../constants';

const initialState = fromJS({
    translation: {},
    activeTab: 'Initial Tab'
});

export default (state = initialState, { type, payload }) => {

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
