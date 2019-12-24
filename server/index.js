import express from 'express';
import chalk from 'chalk';
import path from 'path';

import { config } from './conf/config';
import { SERVER_UI_BASE } from './util';
import routing from './routes';

const parentApp = express();
const app = express();

routing(app);

parentApp
    .use(SERVER_UI_BASE, app)
    .listen(config.port, () => {

        console.log(chalk.greenBright(`[${config.appId}] Server started ... Listening on port ${config.port}`));

        console.log(chalk.greenBright(`[${config.appId}] Run npm run start:dev on another terminal ...`));
    });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../src/assets/index.html'));
});

app.get('/a', (req, res) => {
    res.send('Hello');
    res.json({ message: 'Hello' })
});


// ----------- elastic relative

// var path = require('path');
//
// const { Client } = require('@elastic/elasticsearch/index');
// const client = new Client({ node: 'http://localhost:9200', log: 'trace'});

/*
client.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});
*/
