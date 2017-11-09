import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { renderStatic } from 'glamor/server';
import { rehydrate } from 'glamor';


import { TEMPLATE_STATIC_PATH, loadTemplate } from '../../util/handlebarsUtil';
import loadManifest from '../../util/manifestUtil';

import HomePage from './HomeApp';

const appName = 'home';

export default function(production = true) {
    const { html, css, ids } = renderStatic(() => renderToString(<HomePage />));
    const context = {
        glamorousStyles: css,
        applicationInfo: JSON.stringify({
            glamorousIds: ids
        }),
        pageTitle: 'HomePage',
        reactContent: html,
        staticScriptPath: loadManifest(production).home
    };

    return loadTemplate(path.resolve(TEMPLATE_STATIC_PATH, `${appName}.hbs`), context);
}
