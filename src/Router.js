import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ProductComparison from './ containers/ProductComparison/ProductComparison';

const routing = function () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/comparison" component={ProductComparison} />
            </div>
        </Router>
    );
}

export default routing;