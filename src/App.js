import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import About from './Components/About';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Digimons from './Components/Digimons';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
          <NavLink to="/" className="btn btn-dark" activeClassName="active">
            Home
        </NavLink>
          <Link to="/about" className="btn btn-dark">
            About
        </Link>
          <Link to="/digimons" className="btn btn-dark">
            Digimon
        </Link>
        </div>
        <hr />
        <Switch>
          
          <Route path="/digimons/:name">
            {/* id podria ser el nombre q kiera */}
            <Digimons/>
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/digimons">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
