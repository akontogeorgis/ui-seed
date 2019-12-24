import path from 'path';
import { getTranslation } from '../common/translation';

export default (app) => {

    app.get('/translation*', (req, res) => {

        // Cache it for one day.
        res.setHeader('Cache-Control', 'max-age=86400');

        res.sendFile(path.resolve(`${__dirname}/../data/${req.url}`));
    });
};

// export default (app) => {
//
//     app.use('/api/translation', (req, res) => res.json(getTranslation(req)));
// };
