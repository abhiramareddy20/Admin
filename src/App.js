import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import About from './About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                <NavLink exact to="/about" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">ABOUT</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                  <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                  <NavLink exact to="/about" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">About</NavLink>
              </div>

              <Route exact path="/sign-up" component={SignUpForm}></Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              
              <Route path ="/about" component={About}></Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;