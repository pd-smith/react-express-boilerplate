import React from 'react';
import ReactDOM from 'react-dom';
import { rehydrate } from 'glamor';

import HomePage from './HomeApp';

function entry() {
    const appInfo = JSON.parse(document.getElementById('app-info').innerHTML);

    rehydrate(appInfo.glamorousIds);
    ReactDOM.hydrate(<HomePage />, document.getElementById('page-contents'));
}

entry();
