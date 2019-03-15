import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {text: "Hello, A am Manager!"}
  }
  render(){
    return (
      <h1>{this.state.text}</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();