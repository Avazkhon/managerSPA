import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import OurService from './OurService';
import Instructions from './Instructions';
import About from './About';
import Start from './Start';
import Nav from "./nav";



class App extends React.Component{
  render(){
    return (
      <Router>
        <header>
          <Nav />
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/ourService" component={OurService} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/about" component={About} />
        <Route path="/start" component={Start} />
      </Router>
    )
  }
}

export default App