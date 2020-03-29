import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { FirstView } from './FirstView';

ReactDOM.render(
    <div>
        <CssBaseline/>
        <FirstView/>
    </div>,
    document.getElementById('netflixmustaches')
);