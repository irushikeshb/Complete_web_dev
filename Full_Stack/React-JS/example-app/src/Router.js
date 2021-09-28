import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import About from './Components/About'; 
import Contact from './Components/Contact';
import Photos from './Components/Photos';

function Router() {
    return(
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Photos' component={Photos} />
        </Switch>
    );
}

export default Router;