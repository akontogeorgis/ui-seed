import { createAction } from '../utils/action-creator';
import * as CONSTANTS from '../constants/translation';

export const fetchTranslationAction = createAction(CONSTANTS.FETCH_TRANSLATION);
export const setTranslationAction = createAction(CONSTANTS.SET_TRANSLATION);
