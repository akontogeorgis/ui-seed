import produce from 'immer'

import {
    SHOW_BANNER,
    HIDE_BANNER,
    SET_TRANSLATION,
    SET_TAB
} from '../constants';

const initialState = {
    activeTab: 'Initial tab2',
    translation: {}
};

export default (state = initialState, { type, payload }) => produce(state, draft => {

    switch (type) {

        case SHOW_BANNER:

            draft.bannerInfo = payload;
            break;

        case HIDE_BANNER:

            draft.bannerInfo = null;
            break;

        case SET_TRANSLATION:

            draft.translation = payload;
            break;

        case SET_TAB:

            draft.activeTab = payload;
            break;

        default:

            return initialState;
    }
});
