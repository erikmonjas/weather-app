import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import PlaceInfo from '../components/PlaceInfo';

class AppRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/:id" render={(props) => <PlaceInfo {...props} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;