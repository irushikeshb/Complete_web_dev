import './App.css';
import list from './Components/Userslist';
import Editlist from './Components/Editlist';
import Data from './Components/UsersData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={list} />
        <Route exact path='/UsersData' component={Data}/>
        <Route exact path='/editlist/:id/:name' component={Editlist} />
      </Switch>
    </Router>
  );
}

export default App;
