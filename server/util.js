import { config } from './conf/config';

export const SERVER_UI_BASE = config.serverBaseURI ? `/${config.serverBaseURI}/` : '/';
