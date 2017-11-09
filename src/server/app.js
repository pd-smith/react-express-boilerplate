import express from 'express';
import compression from 'compression';
import path from 'path';
import { info } from '../util/logger';

import renderHomePage from '../pages/home/HomeServerEntry';

function setUpRouters() {
    const router = express.Router();
    router.get('/', (request, response) => {
        renderHomePage()
            .then((content) => response.send(content));
    });

    return router;
}

function setUpServer() {
    const app = express();
    app.use(compression());
    app.use(express.static(path.join(__dirname, '../static')));
    app.use('/', setUpRouters());
    app.listen(8080, () => {
        info('Listening on localhost:8080');
    });
}

setUpServer();
