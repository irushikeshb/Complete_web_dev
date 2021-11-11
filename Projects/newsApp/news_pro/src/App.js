import './App.css';
import { Route, Switch } from 'react-router';
import AppLoader from './Components/AppLoader';
import HeadlinesContainer from './Containers/HeadlinesContainer';
import BusinessContainer from './Containers/BusinessContainer';
import TechnologyContainer from './Containers/TechnologyContainer';
import SportsContainer from './Containers/SportsContainer';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={AppLoader} />
      <Route exact path='/headlines' component={HeadlinesContainer} />
      <Route exact path='/business' component={BusinessContainer} />
      <Route exact path='/technology' component={TechnologyContainer} />
      <Route exact path='/sports' component={SportsContainer} />
    </Switch>
  );
}

export default App;
