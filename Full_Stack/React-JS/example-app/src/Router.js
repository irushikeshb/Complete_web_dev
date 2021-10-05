import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import About from './Components/About'; 
import Players from './Components/Players';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import playerContainer from './Containers/playerContainer';

class Router extends Component {

    state = {
        Players:[
            {
                'id': 1,
                'name':'Ronaldo',
                'image': 'Ronaldo.jpg'
            },
            {
                'id': 2,
                'name':'Sunil',
                'image': 'Sunil.jpg'
            },
            {
                'id': 3,
                'name':'Messi',
                'image': 'Messi.jpg'
            },
            {
                'id': 4,
                'name':'Neymar',
                'image': 'Neymar.jpg'
            },
            {
                'id': 5,
                'name':'Kylian',
                'image': 'Mbappe.jpg'
            }
        ]
    }



    render(){
        return(
            <div>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/Players' render={(props) => <Players{...props}Players={this.state.Players}/>} />
                    <Route exact path="/Players/:id/:name/:image" render={playerContainer}/>
                </Switch>
            </div>
        );
    }    
}

export default Router;