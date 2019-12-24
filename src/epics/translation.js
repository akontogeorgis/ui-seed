import { ajax } from 'rxjs/ajax';
import { mergeMap, pluck, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { FETCH_TRANSLATION } from '../constants';
import { setTranslationAction, showBannerAction } from '../actions';
import { ofType } from '../utils/rxjs-custom-operators';

const translation = (action$) =>
    action$.pipe(
        ofType(FETCH_TRANSLATION),
        mergeMap(({ payload }) =>
            ajax.get(`translation_${payload}.json`).pipe(
                pluck('response'),
                map(setTranslationAction),
                catchError(() => of(showBannerAction({ title: 'It seems there was a server error. Please try again in a bit.' }))),
            )),
    );

export default [
    translation,
];
