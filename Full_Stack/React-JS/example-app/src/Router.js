import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import About from './Components/About'; 
import Contact from './Components/Contact';
import Photos from './Components/Photos';

function Router(){
    return(
        <switch>
            <Route path='/' component={App} />
            <Route path='./About' component={About} />
            <Route path='./Contact' component={Contact} />
            <Route path='./Photos' component={Photos} />
        </switch>
    );
}

export default Router;