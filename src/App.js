import React, { Component } from 'react';
import MyMap from './components/myMap';
import NotFound from "./components/notFound";
import {Route , Redirect , Switch} from "react-router-dom";
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import './App.css';


class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/map" component={MyMap} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>      
     );
  }
}
 
export default App;
