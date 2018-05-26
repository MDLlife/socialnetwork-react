import React from 'util/safe-react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from 'containers/layout/Master';
import Intro from 'containers/Intro';
import Notfound from 'containers/Notfound';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function (history) {
    return (
        <Router history={history}>

            <Route path="/" component={Layout}>

                <IndexRoute component={Intro}/>
                
                <Route path="*" component={Notfound}/>
            </Route>
        </Router>
    );
};