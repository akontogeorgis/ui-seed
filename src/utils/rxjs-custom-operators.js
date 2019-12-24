import { filter } from 'rxjs/operators';

export const ofType = (wantedType) => filter(({ type }) => type === wantedType);
