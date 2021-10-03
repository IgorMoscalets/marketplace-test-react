import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Account, Marketplace, Login, Tester} from "./components";
import './App.css';

class App extends React.Component {

  render(){
    return(


    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/marketplace" exact component={() => <Marketplace />} />
          <Route path="/account" exact component={() => <Account />} />
          <Route path="/tester" exact component={() => <Tester />} />
        </Switch>
      </Router>
    </div>
  
      );
  }
}

export default App;
