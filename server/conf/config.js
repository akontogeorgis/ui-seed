import configFile from './config.json';

const [,, mode = 'dev'] = process.argv;

const config = configFile[mode];

export { config };
