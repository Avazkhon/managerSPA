import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './style/style.css';
import './style/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import OurService from './OurService';
import Instructions from './Instructions';
import About from './About';
import Start from './Start';
import NotFound from './notFound';

import Company from './componyComponent/Company';
import Staff from './componyComponent/Staff';
import Report from './componyComponent/Report';
import Post from './componyComponent/Post';
import Tuning from './componyComponent/Tuning';



class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ourService/" component={OurService} />
          <Route path="/instructions/" component={Instructions} />
          <Route path="/about/" component={About} />
          <Route path="/start/" component={Start} />

          <Route path="/company" component={Company} />
          <Route path="/staff/" component={Staff} />
          <Route path="/report/" component={Report} />
          <Route path="/post/" component={Post} />
          <Route path="/tuning/" component={Tuning} />

          <Route component={NotFound} />

        </Switch>
      </Router>
    )
  }
}

export default App