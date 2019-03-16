import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./nav";


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {text: "Hello, A am Manager!"}
  }
  render(){
    return (
      <div className="app">
        <header>
          <Nav />
        </header>
        <content></content>
        <footer></footer>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();