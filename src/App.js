import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import CheckOut from './components/CheckOut';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
