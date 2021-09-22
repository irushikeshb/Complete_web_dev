import './App.css';
import AppHeader from './Components/AppHeader/Index';
import AppBody from './Components/AppBody/Index';
import AppFooter from './Components/AppFooter/Index';

function App() {
  let name ={

    "username":"Rushikesh",
    "location":"Ahmednagar"
  }
  return (
    <div className="App">
      <AppHeader username={name.username} location={name.location} />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
