import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader/Index';
import AppBody from './Components/AppBody/Index';
import AppFooter from './Components/AppFooter/Index';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
