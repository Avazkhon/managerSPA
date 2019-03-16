import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {text: "Hello, A am Manager!"}
  }
  render(){
    return (
      <div className="app">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
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