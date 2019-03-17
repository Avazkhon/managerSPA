import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import OurService from './OurService';
import Instructions from './Instructions';
import About from './About';



class App extends React.Component{
  render(){
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/OurService" component={OurService} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/About" component={About} />
      </Router>
    )
  }
}

export default App