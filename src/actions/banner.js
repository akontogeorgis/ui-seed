import { createAction } from '../utils/action-creator';

import * as CONSTANTS from '../constants/banner';

export const showBannerAction = createAction(CONSTANTS.SHOW_BANNER);
export const hideBannerAction = createAction(CONSTANTS.HIDE_BANNER);
