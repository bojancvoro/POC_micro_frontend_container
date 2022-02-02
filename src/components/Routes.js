import React from 'react';
import Travel from './Travel';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/travel" component={Travel} />
                <Route component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes