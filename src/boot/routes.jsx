import React from 'react';
import { Router, Route, browserHistory, link, IndexRoute } from 'react-router';
import App from './App';

import FrontPage from 'app/frontPage/index';

class CreateRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>

                    <IndexRoute component={FrontPage} />
                    {/*<Route path="parents" component={ParentsPage} />*/}

                </Route>
            </Router>
        )
    }
}

export default CreateRoutes;
