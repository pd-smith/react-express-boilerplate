import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';

import { TEMPLATE_STATIC_PATH, WEBPACK_STATIC_PATH, loadTemplate } from '../../util/handlebarsUtil';
import loadManifest from '../../util/manifestUtil';

import HomePage from './HomeApp';

const appName = 'home';

export default function(production = true) {
    const context = {
        pageTitle: 'HomePage',
        reactContent: renderToString(<HomePage />),
        staticScriptPath: loadManifest(production)['home']
    };

    return loadTemplate(path.resolve(TEMPLATE_STATIC_PATH, `${appName}.hbs`), context);
}
